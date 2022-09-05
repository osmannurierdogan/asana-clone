const TasksService = require("../services/TasksService.js");
const getAll = async (req, res) => {
  //res.send("Tasks Index");
  const tasks = await TasksService.findAll();
  res.render("tasks", { tasks: tasks });
};
const getById = async (req, res) => {
  const task = await TasksService.findById(req.params.id);
  res.render("tasks", { task: task });
  //res.send("Projects Index");
};
const create = async (req, res) => {
  //res.send("Tasks Create");
  const taskData = {
    title: "Redesign Landing Page",
    description: "Redesign the application's landing page from stracth.",
    due_date: new Date().getTime(),
    assigned_to: "63161366aeef0cac89bd2123",
    statuses: ["Completed", "Todo", "Doing", "Done"],
    section_id: "631613ad76bcb44daac67ee8",
    project_id: "631613802a9892647673c818",
    user_id: "63161366aeef0cac89bd2123",
    order: 1,
    isCompleted: true,
    comments: [],
    media: [],
    sub_tasks: null,
  };
  await TasksService.add(taskData);
  res.render("tasks");
};
const remove = async (req, res) => {
  // res.send("Tasks Remove");
  const itemId = await TasksService.delete(req.params.id);
  res.render("tasks");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
