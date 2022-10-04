const dotenv = require('dotenv')
const mysql = require("mysql2");
dotenv.config()
const config = {
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  database: process.env.DBNAME,
  user: process.env.DBUSER,
  password: process.env.DBPASSWORD,
};
const completeEnv = process.env.DBHOST || process.env.DBPORT ||process.env.DBNAME || process.env.DBNAME||process.env.DBPASSWORD 
const pool = mysql.createPool(config);

module.exports = { pool,completeEnv } 