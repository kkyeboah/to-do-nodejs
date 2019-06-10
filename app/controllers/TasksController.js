'use strict';

const Task = require('../models/Task.js');

module.exports = class TasksController {
    static index(request, response) {
        Task.find({}, (err, tasks) => {
            response.json(tasks);
        });
    }

    static store(request, response) {
        Task.create({name: request.body.name}, function (err, task) {
            response.json(task);
        });
    }

    static show(request, response) {
        Task.findById(request.params.id, (err, task) => {
            response.json(task);
        });
    }

    static update(request, response) {
        Task.findByIdAndUpdate(
            request.params.id,
            {...request.body, ...{updatedAt: Date.now()}},
            {new: true},
            (err, task) => {
                response.json(task);
            });
    }

    static delete(request, response) {
        Task.findOneAndDelete({_id: request.params.id}, (err, task) => {
            response.json(true);
        });
    }
};