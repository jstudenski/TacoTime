var connection = require("../config/connection.js");

// selectAll()
// insertOne()
// updateOne()

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    });

  },

  insertOne: function(tableInput, name, cb) {
    var queryString = "INSERT INTO " + tableInput + " (taco_name) VALUES (?)";
    connection.query(queryString, name, function(err, result) {
      if (err) throw err;
      cb(result);
    });

  },


  //   connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function(
  //   err,
  //   result
  // ) {
  //   if (err) {
  //     // If an error occurred, send a generic server faliure
  //     return res.status(500).end();
  //   }

  //   // Send back the ID of the new quote
  //   res.json({ id: result.insertId });
  // });


  // selectWhere: function(tableInput, colToSearch, valOfCol) {
  //   var queryString = "SELECT * FROM ?? WHERE ?? = ?";
  //   connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },
  // selectAndOrder: function(whatToSelect, table, orderCol) {
  //   var queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
  //   console.log(queryString);
  //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },
  // findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
  //   var queryString =
  //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

  //   connection.query(
  //     queryString,
  //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
  //     function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );
  // }
};

module.exports = orm;


