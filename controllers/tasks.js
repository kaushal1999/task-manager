const Task = require("../models/tasks");
const asyncWrapper = require("../middlewares/async-wrapper");

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find({});
  res.status(200).json(tasks);
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.send(task);
});

const getTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;

  const task = await Task.findById(id);
  if (!task) {
    return res.status(404).json({
      msg: `no task found with id ${id}`,
    });
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
    return res.status(404).json({
      msg: `no task found with id ${id}`,
    });
  }
  res.status(200).json(task);
});

const deleteTask = asyncWrapper(async (req, res) => {
  const id = req.params.id;
  const task = await Task.findOneAndDelete({ _id: id });
  if (!task) {
    return res.status(404).json({
      msg: `no task found with id ${id}`,
    });
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
