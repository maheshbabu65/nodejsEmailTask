const mongodb = require('mongodb');
const Email = require('../models/emails');
const Product = require('../models/product');
const User = require('../models/user');
const ObjectId = mongodb.ObjectId;

exports.getAddProduct = (req, res, next) => {
  res.render('admin/send-email', {
    pageTitle: 'Add Product',
    path: '/admin/send-email',
    editing: false
  });
};

exports.loginSubmit = (req, res, next) => {
  const user_id = req.body.user_id;
  const password = req.body.password;
   User.findById(user_id,password)
    .then(user => {
      console.log('user',user)
      if(user !== null){
        res.redirect('/emails');
      }else{
        res.redirect('/admin/login');
      }
       
    })
    .catch(err => console.log(err));
};

exports.postAddemail = (req, res, next) => {
  const email_to = req.body.email_to;
  const email_title = req.body.email_title;
   const description = req.body.description;
  const email = new Email(email_to, email_title, description);
  email
    .save()
    .then(result => {
      // console.log(result);
      console.log('Email has send successfully');
      res.redirect('/emails');
    })
    .catch(err => {
      console.log(err);
    });
};
exports.addUser = (req, res, next) => {
  const user_id = req.body.user_id;
  const password = req.body.password;
  const user = new User(user_id, password);
  user.save()
    .then(result => {
      // console.log(result);
      console.log('Email has send successfully');
      res.redirect('/emails');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.login = (req, res, next) => {
  res.render('admin/login', {
    pageTitle: 'Add Product',
    path: '/admin/login',
    login: true
  });
};
exports.register = (req, res, next) => {
  res.render('admin/login', {
    pageTitle: 'Add Product',
    path: '/admin/login',
    login: false
  });
};

 