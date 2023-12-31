const express = require('express');
const router = express.Router();
const { detail, add, edit, create, update } = require('../controllers/productsController');
const upload = require('../middlewares/upload');

/* /productos */

router
    .get('/detalle/:id', detail)
    .get('/agregar', add)
    .post('/crear', upload.fields([{name:"mainImage"},{name:"images"}]), create)
    .get('/editar/:id', edit)
    .put('/actualizar/:id', update)


module.exports = router;
