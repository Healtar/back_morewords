const Word = require('../models/word');

exports.getWords = (req, res) => {

    Word.find()
         .then((words) => res.status(200).json(words))
         .catch((error) => res.status(400).json(error))
}