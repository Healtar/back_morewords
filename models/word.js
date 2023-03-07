
const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    _id: {type: String, required: true},
    lettre: { type: String, required: true },
    mots: { type: Array, required: true}

});

module.exports = mongoose.model('Word', wordSchema);
