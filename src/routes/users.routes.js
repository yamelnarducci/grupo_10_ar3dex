const express = require('express');
const router = express.Router();
const { login, register, createUser, processLogin } = require('../controllers/usersController');
const userUpload = require('../middlewares/userUpload');
const userLoginValidator = require('../../validations/user-login-validator');


/* Usuarios */
router
    .get('/ingreso', login )
    .post('/crearUsuario', userUpload.single('userImage'), createUser)
    .get('/registro', register)
    .post('/ingreso',userLoginValidator,processLogin)
    


module.exports = router;



