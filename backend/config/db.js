const mysql = require('mysql2');
require("dotenv").config();

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root1906',       // put your MySQL password here
  database: 'opencare' // name of your database
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = db;