'use strict';

const express = require('express');
const router = express.Router();

const TaskController = require('../app/controllers/TasksController.js');

router.get('/', TaskController.index);
router.post('/', TaskController.store);
router.get('/:id', TaskController.show);
router.put('/:id', TaskController.update);
router.delete('/:id', TaskController.delete);

module.exports = router;