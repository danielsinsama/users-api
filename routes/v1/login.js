/**
 * @module RoutesModule
 */

const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const { loginController } = require("../../controllers/login");
const { validateFields } = require("../../middlewares/validation");
/**
 * Ingresar a esta ruta para el login, enviar password y username.
 * Se ha configurado esta ruta junto con middlewares de express-validator, los cuales,
 * Nos entregan un análisis de lo que envía el usuario, con un mensaje muy claro de error, si hay algún fallo
 * @name new
 * @path {POST} /login
 */
router.post("/api/v1/login", [
    //middlewares
    check('username', 'The username is required').not().isEmpty(),
    check('password', 'The password is required').not().isEmpty(),
    validateFields,
], loginController);
module.exports = router;
