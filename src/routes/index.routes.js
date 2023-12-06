const express = require('express');
const router = express.Router();
const { index, cart, admin } = require('../controllers/indexController')


/* / */
router
  .get('/', index)
  .get('/carrito', cart)
  .get('/admin', admin)

module.exports = router;



