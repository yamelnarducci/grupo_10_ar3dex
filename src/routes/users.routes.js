const express = require('express');

const { login, register, processRegister, processLogin, logout } = require('../controllers/usersController');
const userUpload = require('../middlewares/userUpload');
const userRegisterValidator = require('../../validations/user-register-validator');
const userLoginValidator = require('../../validations/user-login-validator');
const router = express.Router();

/* Usuarios */
router
    .get('/ingreso', login )
    .post('/crearUsuario', userUpload.fields([{name : 'userImage'}]), userRegisterValidator, processRegister)
    .get('/registro', register)
    .post('/ingreso',userLoginValidator,processLogin)
    .get('/salir',logout)


module.exports = router;



