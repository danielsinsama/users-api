const mysql = require("mysql2")
const {hash} = require('../utils/crypto') 
const config = {
    host: "movistardb.cjcmv3tc2pyq.us-east-1.rds.amazonaws.com",
    port: 3306,
    database: "interview_db",
    user: "interview",
    password: "interview123",
}

const pool = mysql.createPool(config);
 

SelectAllUsers = (username) =>{
    return new Promise(async (resolve, reject)=>{
        const sql = `SELECT * FROM Users WHERE username = "${username}"`
        // console.log(sql);
        pool.query(sql,  (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

module.exports= {SelectAllUsers}