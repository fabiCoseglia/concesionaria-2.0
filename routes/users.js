var express = require('express');
const { login, register } = require('../controllers/userControllers');
var router = express.Router();

router.get('/login',login);
router.get('/register',register);

module.exports = router;
