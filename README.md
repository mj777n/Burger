 # Welcome to "The "Eat Da" Burger app

Order your favorite burger and the APP will serve it up for you to devour.

## About the App
 * The Directory structure is as follows:

<burger>  (Root & Github directory)
  <config>
    - connection.js // configures the connection to Mysql database "burgers_db"
    - orm.js   // Object using methods for the SQL statement functions.
               // using Helper function objToSql()
  <controllers>
    - burgers_controller.js // setup router and dependencies
                            // contains POST, PUT, DELETE routes
  <db>
    - schema & seeds files for "burgers_db" database
  <models>
    - burger.js // is the ORM contain
                // the required functions per HW instructions are:
                // selectAll(), insertOne(), updateOne(), deleteOne()
                // for Full CRUD functionality
  <public>
    <assets>
      <css> 
        - style.css (css styling for html)
      <js>  
        - burger.js // JS file for click events "Devour Burger" and "Delete")
                    //   trigger for PUT, POST and DELETE
  <views>
    <layouts>
      - main.handlebars // contains link rel and src sripts for required library:
                        // Bootstrap, jquery.min, javascript file
  <partials>
    <burgers>
      - burger-block.handlebars // handlebars file for delete buttons
    - index.handlebars // contains html structure using Boostrap grid for rendering
  .gitignore // used to prevent node modules from being pushed into the Github
  - server.js

    - server.js  // Set up our Express "server"
                 // required dependences & import routes & give the server access to // // them. Gets handlebars started
                 // Start the server so that it can begin listening to client requests.

## Built with
 * HTML and CSS
   - using Bootstrap package for CSS frame and styling
 * JQuery
 * Express framework
 * NPM installed packages:
   * JSON for text handling
   * Body-Parsing for data handling
* Deployed to Heroku under 
* Deployed to my personal gitHub

## Functionality

## ************************************************************* ##
## Demo of Ap (using TinyTake) ##
[DEMO MY CELEBRITY-FRIEND-FINDER HERE]()


