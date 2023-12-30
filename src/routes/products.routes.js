const express = require('express');
const router = express.Router();
const { detail, add, edit, create, update } = require('../controllers/productsController');

/* /productos */

router
    .get('/detalle/:id', detail)
    .get('/agregar', add)
    .post('/crear', create)
    .get('/editar/:id', edit)
    .put('/actualizar/:id', update)


module.exports = router;
