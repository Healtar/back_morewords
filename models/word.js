
const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    mots: { type: Array, required: true },

});

module.exports = mongoose.model('Word', wordSchema, 'words');
