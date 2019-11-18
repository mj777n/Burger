// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function for SQL syntax.
// This helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to a readable SQL syntax query
function objToSql(ob) {
  var arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  // translate array of strings to a single comma-separated string
  return arr.toString();
}
  //******************************************//
  // Object for all our SQL statement functions.
  // Required functions per instructions are:
  // selectAll(), insertOne(), updateOne(), deleteOne()
  // for Full CRUD functionality
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
    // function insertOne acts as our "Create" for "CRUD"
    // ** using helper function "objToSql" **
  insertOne: function(table, cols, vals, cb) {
    console.log("orm.js insertOne - line 51");
    var queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
    // function updateOne acts as our "Update" for "CRUD"
    // ** using helper function "objToSql" **
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
    // function deleteOne acts as our "Delete" for "CRUD"
  deleteOne: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      
    });
  }   
};
// location.reload();

// Export the orm object for the model (cat.js).
module.exports = orm;
