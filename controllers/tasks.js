const Task = require("../models/tasks");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.send(error);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
};
const getTask = async (req, res) => {
  const id = req.params.id;

  try {
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({
        msg: `no task found with id ${id}`,
      });
    }
    res.status(200).json(task);
  } catch (error) {
    res.send(error);
  }
};
const updateTask = async (req, res) => {
  const id = req.params.id;
    try {
        const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
        new:true,runValidators:true
    });
    if (!task) {
      return res.status(404).json({
        msg: `no task found with id ${id}`,
      });
    }
    res.status(200).json(task);
  } catch (error) {
    res.send(error);
  }
};
const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findOneAndDelete({ _id: id });
    if (!task) {
      return res.status(404).json({
        msg: `no task found with id ${id}`,
      });
    }
    res.status(200).json(task);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
