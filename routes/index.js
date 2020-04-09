let express = require("express");
let router = express.Router();

/* GET home page at ./views/index.ejs */
router.get('/', function(req, res, next) {
  res.render("index");
});

module.exports = router;
