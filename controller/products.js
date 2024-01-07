const Product =require('../models/product');


exports.getProduct=(req, res, next) => {  
   Product.fetchAll((products)=>{
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
   });
  };

  exports.getAddProduct=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  exports.postAddProduct=(req, res, next) => {
    //title is in add-product.ejs file input text name
    const product = new Product(req.body.title);
    res.redirect('/');
  };