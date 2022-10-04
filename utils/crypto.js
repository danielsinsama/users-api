const bcrypt = require("bcrypt");
/**
 * @module utilsModule
 */
/**
 * Función encargada de comprar, con la función "compare" de bcrypt, ambas contraseñas, la que fue encontrada , y la que es enviada
 * 
 * @param {any} password Es la contraseña que debe enviar el usuario
 * @param {any} passworddb Es la contreaseña que está encriptada, bajo bcrypt salt 12
 */
const hash = async (password, passworddb) => await bcrypt.compare(password, passworddb)
module.exports = { hash };