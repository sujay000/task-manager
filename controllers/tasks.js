const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    return res.send('all tasks are here walla, (from the controllers)')
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.json({
            task
        })
    } catch (error) {
        res.json({
            msg: error
        })
    }


}
const getTask = (req, res) => {
    return res.send('get a single task, (from the controllers)')
}
const updateTask = (req, res) => {
    return res.send('update a task, (from the controllers)')
}
const deleteTask = (req, res) => {
    return res.send('delete a task, (from the controllers)')
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}