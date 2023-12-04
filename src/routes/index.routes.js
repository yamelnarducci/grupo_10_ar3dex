const express = require('express');
const router = express.Router();
const { index, cart } = require('../controllers/indexController')


/* / */
router
  .get('/', index)
  .get('/carrito', cart)

module.exports = router;



