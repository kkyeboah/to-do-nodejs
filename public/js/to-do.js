Vue.config.devtools = true;
new Vue({
    el: '#app',

    data: {
        task: '',
        tasks: []
    },

    mounted: function () {
        this.getTasks();
    },

    methods: {
        getTasks: function () {
            axios.get('/api/tasks').then(function (response) {
                this.tasks = response.data;
            }.bind(this));
        },

        addTask: function () {
            if (!this.task) return;

            axios.post('/api/tasks', {name: this.task}).then(function (response) {
                this.tasks.push(response.data);
                this.task = '';
            }.bind(this));
        },

        updateTask: function (id, index, done) {
            axios.put('/api/tasks/' + id, {done: done}).then(function (response) {
                this.tasks[index].done = done;
            }.bind(this));
        },

        deleteTask: function (id, index) {
            axios.delete('/api/tasks/' + id, {name: this.task}).then(function (response) {
                this.tasks.splice(index, 1);
            }.bind(this));
        }
    }
});