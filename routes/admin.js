const path = require('path');

const express = require('express');

const controllerProduct=require('../controllers/products');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product',controllerProduct.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', controllerProduct.postAddProduct);

exports.routes = router;
exports.products = products;
