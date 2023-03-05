
const express = require('express');
const router = express.Router();

const wordCtrl = require('../controllers/controller.words');

router.get('/', wordCtrl.getWords);

module.exports = router