var express = require("express");
var taco = require("../models/taco.js");

var router = express.Router();

  // router.get('/', function (req, res) {
  //   res.render('index');
  // });


router.get("/", function(req, res) {

  taco.all(function(data) {

    var hbsObject = {
      tacos: data
    };

    // var hbsObject = {
    //   tacos: "data"
    // };


    console.log(hbsObject);

     res.render("index", hbsObject);
  });
});



// Export routes for server.js to use.
module.exports = router;