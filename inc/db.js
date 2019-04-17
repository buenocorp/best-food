// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  database: 'best_food',
  password: '123456'
});


module.exports = connection;