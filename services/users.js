const {pool} = require('../database/config')
const selectUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM Users WHERE username = "${username}"`;
        pool.query(sql, (error, elements) => {
            if (error) return reject(error);
            return resolve(elements);
        });
    });
};

module.exports = { selectUserByUsername };