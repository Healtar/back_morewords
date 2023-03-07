const Word = require('../models/word');

exports.getWords = (req, res) => {

    Word.find()
         .then((words) => res.status(200).json(words))
         .catch((error) => res.status(400).json(error))
}

exports.getWordByLetter = (req, res) => {
console.log(req.params.letter);
    Word.findOne({ lettre: req.params.letter})
         .then((words) => res.status(200).json(words))
         .catch((error) => res.status(400).json(error))
      
  };