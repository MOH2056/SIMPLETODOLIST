import todolist from '../models/todolist.js'

const createlist = async(req, res) => {
    try {
        const newtodolist = new todolist(req.body)
        await newtodolist.save()
        res
        .status(201)
        .json(newtodolist)
    } catch(error) {
        res
        .status(500)
        .json({error: error.message})
    }
}

const getlist = async(req, res) => {
    try {
        const todolists = await todolist.findById(req.params.id)
        if(!todolists) {
            return res
            .status(404)
            .json({
                error: 'Not found'
            });
        }
        res
        .status(200)
        .json(todolists)
    } catch(error) {
        res
        .status(500)
        .json({
            error: error.message
        })
    }
}

const updatelist = async (req, res) => {
    try {
        const updateTodo = await todolist.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updateTodo) {
            return res
            .status(400)
            .json('Error')
        }
        return res
        .status(200)
        .json(updateTodo)
    } catch(error) {
        return res
        .status(500)
        .json({
            error: error.message
        })
    }
}

const deletelist = async (req, res) => {
    try {
        const deleteTodo = await todolist.findByIdAndDelete(req.params.id)
        if (!deleteTodo) {
            return res
            .status(404)
            .json({
                error: 'To-Do not found'
            });
        } else{
            res
            .status(200)
            .json({ 
                message: 'To-Do deleted successfully'
            });
        }
    } catch(error){
        res
        .status(500)
        .json({
            error: error.message
        })
    }
}

export { createlist, getlist, updatelist, deletelist };