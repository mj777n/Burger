  // Set up our Express "server"
var express = require("express");
  // Set up our port (either port .env or 8080 for Heroku deployment)
var PORT = process.env.PORT || 8080;
  // give the App the server we've set up with Express
var app = express();
  // Allow the App to access content from a "public" dir. (shortens the dir name needed in code)
app.use(express.static("public"));
  // Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  // require Handlebars for Express into a var, just like var express requires Express
var exphbs = require("express-handlebars");
  // needed for Handlebars - to use "main" for rendering html to the browser
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("The Burger Server is happily listening on: http://localhost:" + PORT);
});
