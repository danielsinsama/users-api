const dotenv = require('dotenv')
const mysql = require("mysql2");
const config = {
  host: "movistardb.cjcmv3tc2pyq.us-east-1.rds.amazonaws.com",
  port: 3306,
  database: "interview_db",
  user: "interview",
  password: "interview123",
};
// console.log('config',process.env);
dotenv.config()
const pool = mysql.createPool(config);

module.exports = {pool}