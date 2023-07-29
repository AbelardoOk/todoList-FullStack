const mysql = require("mysql2");

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.MYSQL_DB,
});

module.exports = connection;
