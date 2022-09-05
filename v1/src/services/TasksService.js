const BaseService = require("./BaseService.js");
const TaskModel = require("../models/TaskModel.js");

class TasksService extends BaseService {
  model = TaskModel;
}
// const insert = (taskData) => {
//   TaskModel.save(taskData);
// };
module.exports = new TasksService();
