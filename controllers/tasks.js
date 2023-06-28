const Task=require("../models/tasks")



const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error) {
        res.send("error");   
    }
}

const createTask = async (req, res) => { 
    try {
        const task = await Task.create(req.body)
        res.send(task)
    } catch (error) {
        res.send("error")
    }
};
const getTask = (req, res) => { };
const updateTask = (req, res) => { };
const deleteTask = (req, res) => { };



module.exports = {
    getAllTasks,createTask,updateTask,deleteTask,getTask
}