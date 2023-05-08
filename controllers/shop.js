const Product = require('../models/product');
const Email = require('../models/emails')
exports.Emails = (req, res, next) => {
  Email.fetchAll()
    .then(products => {
      console.log(products)
      res.render('shop/emails', {
        prods: products,
        pageTitle: 'All Products',
        path: '/emails'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEmail = (req, res, next) => {
  const prodId = req.params.productId; 
  Email.findById(prodId)
    .then(product => {
      res.render('shop/product-detail', {
        product: product,
        pageTitle: product.email_title,
        path: '/products'
      });
    })
    .catch(err => console.log(err));
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll()
    .then(products => {
      res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
      });
    })
    .catch(err => {
      console.log(err);
    });
};

 