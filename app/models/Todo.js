/**
* Copyright 2023 
* Name : Fazir M Fahmy.
* email : fazirm.fahmy@gmail.com
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Todo = mongoose.model('todos', TodoSchema);