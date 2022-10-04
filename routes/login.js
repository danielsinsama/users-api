const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const { loginController } = require("../controllers/login");
const { validateFields } = require("../middlewares/validation");

router.post("/login", [
    //middlewares
    check('username', 'The username is required').not().isEmpty(),
    check('password', 'The password is required').not().isEmpty(),
    validateFields,
], loginController);
module.exports = router;
