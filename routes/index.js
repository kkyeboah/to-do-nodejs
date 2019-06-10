'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (request, response) => {
    response.sendFile(path.resolve('app/views/index.html'))
});

module.exports = router;
