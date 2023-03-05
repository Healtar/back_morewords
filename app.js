require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const wordRoute = require('./routes/route.word');

const app = express();

app.use(express.json());

// Connexion au cluster
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;

mongoose.connect(`mongodb+srv://${user}:${pass}@cluster1.hwhoxyx.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'))

//Autorise toute les sources 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/morewords/words', wordRoute);

  module.exports = app;