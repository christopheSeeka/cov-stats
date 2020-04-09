let express = require("express");
let router = express.Router();

/* GET admin page at ./views/admin.ejs. */
router.get("/", function (req, res, next) {
  res.render("admin");
});

module.exports = router;
