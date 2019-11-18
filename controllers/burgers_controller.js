var express = require("express");
  // Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

var router = express.Router();
  // Create all our routes and set up logic within the routes
  // "get" router, "post" & "put" routers and "delete" router are needed
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
console.log(hbsObject);
console.log("Line 14, burger.selectALL");
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"], 
    [req.body.burger_name, req.body.devoured],
    function(result) {
      // Send back the ID of the new burger
      console.log("router.post - new burger added / controller line 25");
    res.json({ id: result.insertId });
    });
});
// fires when "Eat me" is clicked
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
console.log("condition = ", condition);  
  burger.updateOne({devoured: req.body.devoured},
  condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("In controller before burger.delete");
  burger.deleteOne(condition, function(result) {
  console.log("after burger.delete"); 

  // res.render("index", hbsObject);
    if (result.changedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
     
      res.status(200).end();
    }
  });
});

// Export the above routes for server.js to use.
module.exports = router;
