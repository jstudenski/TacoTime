var express = require("express");
var burger = require("../models/taco.js");

var router = express.Router();

router.get("/", function(req, res) {
  taco.all(function(data) {
    var hbsObject = {
      tacos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});




// Export routes for server.js to use.
module.exports = router;

