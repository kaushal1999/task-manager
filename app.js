const express = require("express")
const port=5000
const app = express()

const tasks=require('./routes/tasks')

app.use('/api/v1/tasks', tasks)




app.listen(port,console.log("listening..."))