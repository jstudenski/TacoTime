var connection = require("../config/connection.js");

// selectAll()
// insertOne()
// updateOne()

var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      // console.log(result);
      cb(result);
    });

  },

  insertOne: function(table, name, cb) {
    var queryString = "INSERT INTO " + table + " (taco_name) VALUES (?)";
    connection.query(queryString, name, function(err, result) {
      if (err) throw err;
      cb(result);
    });

  },

  // "UPDATE quotes SET author = ?, quote = ? WHERE id = ?",
  //   [req.body.author, req.body.quote, req.params.id],


  // "UPDATE products SET stock_quantity = (stock_quantity + ?) WHERE item_id = ?", [resp.qty, resp.id],
  //  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + " SET eaten = 1 WHERE "+condition
    // var queryString = "UPDATE " + table;
    // queryString += " SET ";
    // queryString += objColVals; //objToSql(objColVals);
    // queryString += " WHERE ";
    // queryString += condition;
    //console.log("J" +);
    console.log(objColVals);
    connection.query(queryString, function(err, result) {
      if (err) {
        console.log(err);
        throw err;
      }

      cb(result);
    });
  },


//   app.put("/api/quotes/:id", function(req, res) {
//   connection.query(
//     "UPDATE quotes SET author = ?, quote = ? WHERE id = ?",
//     [req.body.author, req.body.quote, req.params.id],
//     function(err, result) {
//       if (err) {
//         // If an error occurred, send a generic server faliure
//         return res.status(500).end();
//       }
//       else if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();

//     }
//   );
// });





// update: function(table, objColVals, condition, cb) {
//     var queryString = "UPDATE " + table;

//     queryString += " SET ";
//     queryString += objToSql(objColVals);
//     queryString += " WHERE ";
//     queryString += condition;

//     console.log(queryString);
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }

//       cb(result);
//     });
//   },





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


