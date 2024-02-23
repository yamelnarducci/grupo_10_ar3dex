const express = require('express');
const router = express.Router();

const { login, register, processRegister, processLogin, logout, profile } = require('../controllers/usersController');
const userUpload = require('../middlewares/userUpload');
const userRegisterValidator = require('../validations/user-register-validator');
const userLoginValidator = require('../validations/user-login-validator');
const checkUserLogin = require('../middlewares/checkUserLogin');
const profileUpdate = require('../controllers/usersController/profileUpdate');
const userEditValidator = require('../validations/user-edit-validator');
const checkAuthUser = require('../middlewares/checkAuthUser')

/* Usuarios */
router
    .get('/ingreso',checkAuthUser, login )
    .post('/crearUsuario', userUpload.fields([{name : 'userImage'}]), userRegisterValidator, processRegister)
    .get('/registro', checkAuthUser,register)
    .post('/ingreso',userLoginValidator,processLogin)
    .get('/salir',logout)
    .get('/perfil/:id',checkUserLogin,profile)
    .put('/actualizarPerfil/:id', userUpload.fields([{name : 'userImage'}]), userEditValidator,profileUpdate)


module.exports = router;



