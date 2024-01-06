const path = require('path');

const express = require('express');

const controllerProduct=require('../controllers/products');
const adminData = require('./admin');

const router = express.Router();

router.get('/', controllerProduct.getProduct);

module.exports = router;
