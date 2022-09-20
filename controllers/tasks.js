const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({})
        return res.json({ allTasks })
        //return res.json({allTasks : allTasks })
    } catch (error) {
        return res.json({ msg: error })
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        return res.json({ task })
        //return res.json({ task : task })
    } catch (error) {
        return res.json({ msg: error })
    }
}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params //id is taken and taskID is the alias for id
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.json({ msg: `No task with id : ${taskID}` })
        }
        return res.json({ task })
    } catch (error) {
        return res.json({ msg: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.json({ msg: `No task with id : ${taskID}` })
        }
        return res.json({ task })
    } catch (error) {
        return res.json({ msg: error })
    }
}

const updateTask = (req, res) => {
    return res.send('update a task, (from the controllers)')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}
