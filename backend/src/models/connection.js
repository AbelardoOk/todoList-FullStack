const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todolist",
});

module.exports = connection;
