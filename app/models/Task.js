'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Task', TaskSchema);