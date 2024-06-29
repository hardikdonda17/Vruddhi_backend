const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"vruddhi"
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
    }
    console.log('Connected to MySQL');
  });

// connection.connect(function(err) {
//     if(err)
//         throw err;
//     console.log("Connected!");
// })


module.exports = connection;