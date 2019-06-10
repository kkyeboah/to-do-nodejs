'use strict';
const path = require('path');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// config
const dbConfig = require('./config/database');
const appConfig = require('./config/app');

// connect to db
mongoose.connect(
    dbConfig.url,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    },
    (error) => {
        if (error) throw error;
    }
);

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/index'));
app.use('/api/tasks', require('./routes/tasks'));

// cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

// start server
const appPort = appConfig.port;
app.listen(appPort, () => console.log('Listening on ' + appPort));

