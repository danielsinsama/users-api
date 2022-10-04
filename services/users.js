const {pool,completeEnv} = require('../database/config')
/**
 * @module servicesModule
 */
/**
 * Función encargada de agregar comunicarse con la base de datos, mediante SQL, para obtener un usuario
 * 
 * @param {any} username Nombre de usuario a buscar en la base de datos
 */
const selectUserByUsername = (username) => {
    return new Promise((resolve, reject) => {
        if(!completeEnv)
            return reject("No se ha encontrado configuracion en variables de entorno");
        const sql = `SELECT * FROM Users WHERE username = "${username}"`;
        pool.query(sql, (error, elements) => {
            if (error) return reject(error);
            return resolve(elements);
        });
    });
};

module.exports = { selectUserByUsername };