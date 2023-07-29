const mysql = require("mysql2");
const cc = require("./connection_config");

const connection = mysql.createConnection({
  host: cc.host,
  port: cc.port,
  user: cc.user,
  password: cc.password,
  database: cc.database,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL server:", err);
    return;
  }
  console.log("Connected to MySQL server successfully");
  // Perform your database operations here
  connection.end();
});
