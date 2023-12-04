const express = require('express');
const { login, register } = require('../controllers/usersController');
const router = express.Router();

/* GET users listing. */
router
    .get('/ingreso', login )
    .get('/registro', register)

module.exports = router;



