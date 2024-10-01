const Todolist = require('../models/todolist');

exports.createTodo = async (req, res) => {
  const { title, task, date } = req.body;
  try {
    const newTodolist = new Todolist({
      userId: req.user,
      title,
      task,
      date,
    });
    await newTodolist.save();
    res.status(201).json(newTodolist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};