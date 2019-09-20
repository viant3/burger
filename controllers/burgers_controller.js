var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.


router.get("*", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function(data) {
    res.redirect("/");
  });
});

router.post("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(data) {
    res.redirect("/");
  });
});

module.exports = router;