const Task = require("../models/tasks");
const asyncWrapper = require("../middlewares/async-wrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.send(task);
});

const getTask = asyncWrapper(async (req, res,next) => {
  const id = req.params.id;

  const task = await Task.findById(id);
  if (!task) {
    const error = new Error("No Task Found")
    error.status = 404
    return next(error)
  }
  res.status(200).json(task);
});

const updateTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOneAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    const error = new Error("No Task Found");
    error.status = 404;
    return next(error);
  }
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
     const error = new Error("No Task Found");
     error.status = 404;
     return next(error);
  }
  res.status(200).json(task);
});

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
};
