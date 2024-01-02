const express = require('express');
const router = express.Router();
const { login, register, createUser } = require('../controllers/usersController');
const userUpload = require('../middlewares/userUpload');

/* Usuarios */
router
    .get('/ingreso', login )
    .post('/crearUsuario', userUpload.single('userImage'), createUser)
    .get('/registro', register)

module.exports = router;



