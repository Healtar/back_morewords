
const express = require('express');
const router = express.Router();

const wordCtrl = require('../controllers/controller.words');


router.get('/', wordCtrl.getWords);
router.get('/:letter', wordCtrl.getWordByLetter);

module.exports = router