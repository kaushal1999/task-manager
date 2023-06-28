const Task=require("../models/tasks")



const getAllTasks = async (req, res) => {
    try {

    } catch (error) {
        
    }
}

const createTask = async (req, res) => { 
    try {
        const task = await Task.create(req.body)
        res.send("done")
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