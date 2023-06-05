const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "192.168.100.2",
  port: 3306,
  user: "intUsr",
  password: "123456",
  database: "investo",
  connectionLimit: 10,
});

connection.connect((err) => {
  if (err) {
    console.log("SQL server is off");
    throw err;
  } else {
    console.log("Database connected already ...");
	
  }
});

connection.end();
