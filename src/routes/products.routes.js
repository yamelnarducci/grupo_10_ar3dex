const express = require('express');
const router = express.Router();

const { detail, add, edit } = require('../controllers/productsController');


/* /productos */
router
    .get('/agregar', add)
    .get('/detalle/:id', detail)
    .get('/editar/:id?', edit)

module.exports = router;
