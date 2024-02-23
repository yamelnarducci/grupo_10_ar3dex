
const express = require('express');
const router = express.Router();
const { detail, add, edit, create, update, remove, colection, search } = require('../controllers/productsController');
const upload = require('../middlewares/upload');
const productAddValidatior = require('../validations/product-add-validatior');


/* /productos */

router
    .get('/detalle/:id', detail)
    .get('/agregar', add)
    .post('/crear', upload.fields([{name:"mainImage"},{name:"images"}]), productAddValidatior, create)
    .get('/editar/:id', edit)
    .put('/actualizar/:id', upload.fields([{name:"mainImage"},{name:"images"}]), update)
    .delete('/eliminar/:id',remove)
    .get('/coleccion', colection)
    .get('/buscar', search)


module.exports = router;
