const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "username",
  password: "password",
  database: "dbname",
 });

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log("Database connected already ...");
connection.end();
	
  }
});

