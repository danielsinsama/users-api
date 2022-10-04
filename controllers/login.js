const { selectUserByUsername } = require('../services/users')
const { hash } = require("../utils/crypto");
//@ts-check

/**
 * Módulo con los métodos respectivos a la autenticación de un usuario
 * @module LoginController
 */

/**
 * Esta función se encarga loguear un usuario, verificando que esté en la base de datos, y cuyos datos coincidan con los datos almacenados
 * @param {object} req Es la petición a recibir del frontend, en este caso los datos del usuario a loguear (username,password)
 * @param {object} res Es la respuesta que debemos brindar, en este caso un objeto con información del resultado
 * @returns {any}
 */
const loginController = async (req, res) => {
  const { body } = req;
  try {
    const [user] = await selectUserByUsername(body.username);
    //user validation
    if (!user)
      return res.status(400).json({
        ok: false,
        msg: "User not found",
        data: null
      })
    const valid = await hash(body.password, user.password);
    const resp = !valid ? res.status(401) : res.status(200)
    //password validation
    return resp.send({
      ok: valid,
      msg: valid ? "Welcome" : "This password is wrong",
      data: valid ? user.fullname : null
    })
  } catch (error) {
    const status = error.status ? 400 : 500
    //internal validation
    return res.status(error.status).send({
      ok: false,
      msg: status == 400 ? error.msg.toString() : error.toString(),
      data: null
    });
  }
};

module.exports = {
  loginController,
};
