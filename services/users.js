const {pool} = require('../database/config')
const selectAllUsers = (username) => {
    return new Promise(async (resolve, reject) => {
        const sql = `SELECT * FROM Users WHERE username = "${username}"`;
        // console.log(sql);
        pool.query(sql, (error, elements) => {
            if (error) {
                return reject(error);
            }
            return resolve(elements);
        });
    });
};

module.exports = { selectAllUsers };