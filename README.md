Sure! Below is the updated README with the inclusion of the `connection_config` code:

**README for Database Connection Scripts**

This repository contains Node.js scripts to establish database connections for both MySQL and Microsoft SQL Server (MSSQL). These scripts can be used to verify the connectivity to the respective databases and serve as a starting point for performing various database operations.

**Prerequisites:**
1. Node.js and npm should be installed on your system.
2. Ensure you have a running and accessible MySQL server for the MySQL script.
3. Ensure you have a running and accessible Microsoft SQL Server for the MSSQL script.

**Setup:**
1. Clone the repository or download the script files (`mysql_connection.js` and `mssql_connection.js`).
2. For each script, install the required dependencies by running the following commands in your project directory:
   ```bash
   # For MySQL Script
   npm install mysql2

   # For MSSQL Script
   npm install mssql
   ```
3. Modify the `connection_config.js` file for both scripts with your respective database connection details (host, port, user, password, and database).

**Connection Configuration:**
- The `connection_config.js` file contains the necessary configuration for connecting to the databases. Update the following details in the file:

```javascript
// connection_config.js

const connection_config = {
  host: 'server-name-or-ip',
  port: 3306, // Replace this with the appropriate port for your MySQL server
  user: 'username',
  password: "password",
  database: "database-name",
};

module.exports = connection_config;
```

**MySQL Script:**
- **File:** `mysql_connection.js`
- **Description:** This script establishes a connection to a MySQL database using the `mysql2` package in Node.js. It reads the connection details from the `connection_config.js` file and performs a basic connection test.
- **Usage:**
  ```bash
  node mysql_connection.js
  ```
- **Outcome:**
  - If the connection is successful, it will display "Connected to MySQL server!" in the console.
  - If there's an error during the connection attempt, it will display an error message indicating the issue.

**MSSQL Script:**
- **File:** `mssql_connection.js`
- **Description:** This script establishes a connection to a Microsoft SQL Server (MSSQL) database using the `mssql` package in Node.js. It reads the connection details from the `connection_config.js` file and performs a basic connection test.
- **Usage:**
  ```bash
  node mssql_connection.js
  ```
- **Outcome:**
  - If the connection is successful, it will display "Connected to Microsoft SQL Server!" in the console.
  - If there's an error during the connection attempt, it will display an error message indicating the issue.

**Note:**
- Ensure that the respective database servers (MySQL and MSSQL) are running and accessible with the provided connection details.
- If you encounter any issues during the connection process, double-check the configuration settings and ensure the database servers are accessible from your environment.
- Review the options object in the `mssql_connection.js` script if you are connecting to a non-standard SQL Server setup, as it might need adjustments.

Feel free to extend these scripts to perform additional database operations based on your requirements. Happy coding!
