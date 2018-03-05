var express = require("express");
var taco = require("../models/taco.js");

var router = express.Router();

  // router.get('/', function (req, res) {
  //   res.render('index');
  // });


router.get("/", function(req, res) {

  taco.all(function(data) {

    var object = {
      tacos: data
    };
    console.log(object);
    res.render("index", object);
  });
});

router.post("/api/tacos", function(req, res) {
  taco.create([
    req.body.name
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});




// Export routes for server.js to use.
module.exports = router;