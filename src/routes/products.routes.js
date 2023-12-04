const express = require('express');
const router = express.Router();

const { detail, add } = require('../controllers/productsController');


/* /productos */
router
    .get('/detalle/:id', detail)
    .get('/agregar', add)

module.exports = router;
