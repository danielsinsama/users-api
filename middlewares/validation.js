const { validationResult } = require('express-validator');
const { response } = require('express');

/**
 * @module validateFields
 */
/**
 * Middleware que en encarga de revisar qué se está enviando, para incluir ciertas restricciones
 * @param {object} req Petición, se revisará su atributo header el cual debe contener un token válido
 * @param {object} res Respuesta de acuerdo al valor que tenga el token
 * @param {any} next La función que continuará luego de este middleware
 * @returns {any}
 */
const validateFields = (req, res = response, next) => {
	//manejo de errores
	const errors = validationResult(req);
	if (!errors.isEmpty()) 
		return res.status(400).json({
			ok: false,
			errors: errors.mapped(),
		});
	next();
};

module.exports = {
	validateFields,
};
