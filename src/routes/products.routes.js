const express = require('express');
const router = express.Router();

const { detail, add, edit, create, update, remove } = require('../controllers/productsController');


/* /productos */
router
    .get('/detalle/:id', detail)
    .get('/agregar', add)
    .post('/crear',create)
    .get('/editar/:id?', edit)
    .put('/actualizar/:id',update)
    .delete('/eliminar/:id',remove)

module.exports = router;
