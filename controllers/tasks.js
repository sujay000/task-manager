const getAllTasks = (req, res) => {
    return res.send('all tasks are here walla, (from the controllers)')
}

const createTask = (req, res) => {
    return res.send('create a task, (from the controllers)')
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