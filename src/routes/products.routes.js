const express = require('express');
const router = express.Router();

const { detail, add, edit } = require('../controllers/productsController');


/* /productos */
router
    .get('/detalle/:id', detail)
    .get('/agregar', add)
    .get('/editar/:id?', edit)

module.exports = router;
