// IMPORT DATATABLE
import "datatables.net";
import "datatables.net-buttons";

// NEEDS FOR WEBPACK, JUST IMPORT IT :)
import "regenerator-runtime/runtime.js";

// IMPORT GETDATA TOOLS, THIS FILE INCLUDE METHODS USED IN DIFFERENT PAGES TO AVOID REPETITION
import Getdata from "./getdata";
// INIT THE TOOLS
let getdata = new Getdata();

// DECLARE YOUR VARIABLES TO STORE THE DIFFERENT CASES NUMBERS
let countActive = 0,
    countRecovered = 0,
    countDeceased = 0,
    countTotal = 0

// GET/SET PAGE NAME FROM DATA STORAGE
getdata.getDataByKey(getdata.userAddress + "_name").then((res) => {
  document.getElementById("title").innerHTML = res[0].value;
  document.title = res[0].value;
});

// GET/SET PAGE DESCRIPTION FROM DATA STORAGE
getdata.getDataByKey(getdata.userAddress + "_intro").then((res) => {
  document.getElementById("introtop").innerHTML = res[0].value;
});

// THIS INITIALIZE AND CONFIGURE OUR TABLE USING DATATABLE PLUBGIN, WE ACTIVATE FILTERS, SORTING ETC.
let initTable = function(){
  if (getdata.userAddress != "" && getdata.userAddress != "undefined") {
    $("#results").DataTable({
      dom:'rt<"showing d-flex justify-content-between mt-3"li><"d-flex justify-content-center mb-3"p><"clear">',
      rowReorder: {
          selector: 'td:nth-child(2)'
      },
      responsive: true,
      "order": [[ 0, "desc" ]],
      "oLanguage": {
         "sInfo": "Showing _START_ to _END_ of _TOTAL_"
       },
      initComplete: function () {
        var counting = 0;
        this.api()
          .columns()
          .every(function () {
            
            var column = this;
            var select = $('<select class="custom-select mr-2 select_'+counting+'"><option value="">All</option></select>')
              .appendTo("#filtering")
              .on("change", function () {
                var val = $.fn.dataTable.util.escapeRegex($(this).val());
                column.search(val ? "^" + val + "$" : "", true, false).draw();
              });
            
              if (counting == 2){
                                  // WE WANT A SPECIAL SELECT FILTER FOR AGE COLUMN WITH RANGE SELECTION
                                  select.append(
                                    '<option value="" class="1-25">1-25</option><option value="" class="26-50">26-50</option><option value="" class="51-75">51-75</option><option value="" class="76">76+</option>'
                                  );
                                }else{
                column
                  .data()
                  .unique()
                  .sort((a, b) => {
                    return a - b;
                  })
                  .each(function (d, j) {
                    select.append('<option value="' + d + '">' + d + "</option>");
                  });
              }
                
              counting ++
          });

       
        document.querySelector(".dataTables_length select").classList.add("custom-select");
        document.querySelector(".loading").style.display = "none"
      },
    });
  }
  // ADD COLUMNS NAME TO FILTERS
  document.querySelectorAll("thead td").forEach(function(th, index){
    document.querySelector(`#filtering .custom-select:nth-child(${index+1})`).options[0].textContent += " "+th.textContent.toLowerCase()
  })

  // HERE WE OVERRIDE THE DATATABLE FILTER TO CONVERT THE AGE COLUMN INTO A RANGE FILTER
  $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {

      let min = 1
      let max = 130
      let age = parseFloat(data[2]); // use data for the age column

      switch ($(".select_2 option:selected").attr("class")) {
        case "1-25": min = 1; max = 25;
        break;

        case "26-50": min = 26; max = 50;
        break;

        case "51-75": min = 51; max = 75;
        break;

        case "76": min = 76; max = 130;
        break;

        default:
      }

      if ((isNaN(min) && isNaN(max)) ||
        (isNaN(min) && age <= max) ||
        (min <= age && isNaN(max)) ||
        (min <= age && age <= max)) {
        return true;
      }

  });
}



// WE GET THE TOTAL NUMBER OF CASES FOR THE CURRENT ACCOUNT/PAGE THEN WE PROCESS THE DATA
getdata.getDataByKey(getdata.userAddress+"_counterNum").then(async res => {

  // REQUEST ALL ENTRIES
  let getAll = await getdata.getDataByKey(getdata.userAddress+"_patient_(.*)");

  // WE KNOW WE HAVE 6 KEY PER ENTRY SO WE WILL CHUNK IT BY 6
  let chunk = 6;

  // WE LOOP OVER ALL REQUESTED DATA TO GROUP THEM BY SAME ID
  for (let i = 0; i < getAll.length; i += chunk) {
    
    // WE GET THE CORRESPONDING 6 KEY FOR EACH ITERATION
    let temparray = getAll.slice(i, i + chunk);

    // WE CREATE A NEW OBJECT PER ENTRY
    let tempObj = {}

    // WE LOOP OVER THE ENTRY ARRAY AND ASSIGN SIMPLIFIED KEY TO THE NEW OBJECT
    for (var o = 0; o < temparray.length; o++) {
      let newKey = temparray[o].key;
      newKey = newKey.split("_")[3]
      tempObj[newKey] = temparray[o].value;
    }

    // WE CHECK THE STATUS PER ENTRY (1, 2 OR 3) AND ASSIGN CORRESPONDING STRING
    // WE ALSO INCREMENT THE DIFFERENT COUNTER ACCORDING TO IT
    let status = ""
    
    switch(tempObj.status){
      case 1:
      status = "ACTIVE"
      countActive ++
      break;

      case 2:
      status = "RECOVERED"
      countRecovered ++
      break;

      case 3:
      status = "DECEASED"
      countDeceased++
      break;

      default :
    }

    countTotal++;

    // WE CREATE OUR NEW TABLE ROW
    let tempTR = 
      `<tr>
        <td class="id">${tempObj.identifiant}</td>
          <td class="gender">${tempObj.gender}</td>
          <td class="age">${tempObj.age}</td>
          <td class="location">${tempObj.location}</td>
          <td class="pec">${tempObj.pec}</td>
          <td class="status">${status}</td>
        </tr>`;

    // WE APPEND THE NEW ROW TO THE TABLE
    document.querySelector("#results tbody").innerHTML += tempTR;
  }

  // SET TOP WIDGET DATA
  document.querySelector(".active").textContent = countActive;
  document.querySelector(".recovered").textContent = countRecovered;
  document.querySelector(".deceased").textContent = countDeceased;
  document.querySelector(".total").textContent = countTotal;

  // SET FOOTER LINKS DATA
  document.getElementById("pageaddress").href = "https://www.wavesexplorer.com"+getdata.explorerSegment+"/address/"+getdata.userAddress
  document.getElementById("pageaddress").innerHTML = getdata.userAddress;
  document.getElementById("smartcontract").href = "https://www.wavesexplorer.com"+getdata.explorerSegment+"/address/"+getdata.dappAddress+"/data"
  document.getElementById("smartcontract").innerHTML = getdata.dappAddress;

  // INITIATE THE TABLE AND DISPLAY IT 
  initTable()

}).catch(err => {
  // WE GET AN ERROR IF THERE IS NO ENTRY FOR THE ACCOUNT
  console.log(err)
});