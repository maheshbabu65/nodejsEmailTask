const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();
router.get('/send-email', adminController.getAddProduct);
router.get('/login', adminController.login);
router.get('/register', adminController.register); 
router.post('/add-product', adminController.postAddemail);
router.post('/login', adminController.loginSubmit);
router.post('/registration', adminController.addUser);
 

module.exports = router;
