  // Set up MySQL connection.
var mysql = require("mysql");
  // set up connection using jawsDB addon for Heroku deployment
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
   connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Birdie88!",
    database: "burgers_db"
  }); 
}

  // Make connection.
connection.connect();
  
//   function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// Export connection for the ORM to use.
module.exports = connection;
