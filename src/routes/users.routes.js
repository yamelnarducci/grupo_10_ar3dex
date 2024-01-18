const express = require('express');
const router = express.Router();
const { login, register, processRegister } = require('../controllers/usersController');
const userUpload = require('../middlewares/userUpload');
const userRegisterValidator = require('../../validations/user-register-validator');

/* Usuarios */
router
    .get('/ingreso', login )
    .post('/crearUsuario', userUpload.fields([{name : 'userImage'}]), userRegisterValidator, processRegister)
    .get('/registro', register)

module.exports = router;



