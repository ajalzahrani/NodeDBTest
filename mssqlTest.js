const sql = require("mssql");
const cc = require("./connection_config");

const config = {
  user: cc.user,
  password: cc.password,
  server: cc.host,
  port: cc.port,
  database: cc.database,
  options: {
    encrypt: true, // For Azure SQL Database, set to true
    trustServerCertificate: true, // For Azure SQL Database, set to true
  },
};

sql.connect(config)
  .then((pool) => {
    console.log("Connected to Microsoft SQL Server!");

    // Perform your database operations here

    pool.close();
  })
  .catch((err) => {
    console.error("Error connecting to Microsoft SQL Server:", err);
  });
