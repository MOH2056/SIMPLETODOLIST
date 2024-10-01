const mongoose = require('mongoose')
const todolistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    task: {type: String, required: true},
    date: {type: String, required: false}
})
const todolist = mongoose.model('todolist', todolistSchema)
module.exports = todolist;