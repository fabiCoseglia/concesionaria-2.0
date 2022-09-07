var express = require('express');
const { login, register, createUser } = require('../controllers/userControllers');
var router = express.Router();

//validations//
const registerValidations = require('../validations/registerValidations');


// /users/ //
router.get('/login',login);
router.get('/register',register);
router.post('/createUser',registerValidations,createUser);

module.exports = router;
