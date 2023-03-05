const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    newtask: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
    },
})

const Todo = mongoose.model('Todo',todoSchema)

module.exports = Todo;