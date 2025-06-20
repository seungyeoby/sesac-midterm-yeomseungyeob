const express = require("express");
const router = express.Router();
const prisma = require('../utils/prisma/index.js')
const { body, validationResult} = require('express-validator')
const bcrypt = require('bcrypt')
const { handleValidation, signUpValidator , loginValidator} = require('../middleware/validation-result-handler.js')
const authenticateToken = require("../middleware/authenticate-middleware.js");
const authController = require( '../controllers/auth.controller.js')
const jwt = require('jsonwebtoken');
const SECRET_KEY = "sessac";

router.post('/sign-up',signUpValidator, handleValidation, authController.signUp)

router.post('/login', loginValidator, handleValidation, authController.logIn)

module.exports = router;