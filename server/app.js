const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://dellenger:dellenger974@cluster0.fmzdq.mongodb.net/<dbname>?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

const authRoutes = require('./routes/authentication')
const songsRoutes = require('./routes/songs')

app.use('/authentication', authRoutes)
app.use('/songs', songsRoutes)

module.exports = app;