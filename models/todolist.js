const mongoose = require('mongoose')
const todolistSchema = new mongoose.Schema({
    title: {type: String, required: true},
    body: {type: String, required: true},
    date: {type: Date, default: Date.now}
})
const todolist = mongoose.model('todolist', todolistSchema)
module.exports = todolist;