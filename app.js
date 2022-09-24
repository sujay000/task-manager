const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
const path = require('path')
require('dotenv').config()
const notFound = require('./middleware/not-found')

// middleware
app.use(express.static('./public'))
// or app.use(express.static(path.resolve(__dirname, 'public')))
app.use(express.json()) // for getting the req.body properly

// routes
app.use('/api/v1/tasks', tasks)

// if the route is not of the above then it is not found
app.use(notFound)

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}....`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()
