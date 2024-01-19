const express = require('express');

const { login, register, processRegister, processLogin, logout, profile, profileEdit } = require('../controllers/usersController');
const userUpload = require('../middlewares/userUpload');
const userRegisterValidator = require('../../validations/user-register-validator');
const userLoginValidator = require('../../validations/user-login-validator');
const checkUserLogin = require('../middlewares/checkUserLogin');
const checkAuthUser = require('../middlewares/checkAuthUser');
const userProfileEditValidator = require('../../validations/user-profile-edit-validator');
const router = express.Router();

/* Usuarios */
router
    .get('/ingreso',checkAuthUser, login )
    .post('/crearUsuario', userUpload.fields([{name : 'userImage'}]), userRegisterValidator, processRegister)
    .get('/registro', checkAuthUser,register)
    .post('/ingreso',userLoginValidator,processLogin)
    .get('/salir',logout)
    .get('/perfil',checkUserLogin, userProfileEditValidator, profile)
    .post('/editarPerfil', userUpload.fields([{name : 'userImage'}]), userProfileEditValidator, profileEdit)

module.exports = router;



