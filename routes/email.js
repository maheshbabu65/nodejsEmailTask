const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/emails', shopController.Emails);

router.get('/email/:productId', shopController.getEmail);



module.exports = router;
