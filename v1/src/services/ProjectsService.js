const BaseService = require("./BaseService.js");
const ProjectModel = require("../models/ProjectModel.js");

class ProjectsService extends BaseService {
  model = ProjectModel;
  // async getUserProjects(userId) {
  //   return this.model.find({ user_id: userId });
  // }
}
module.exports = new ProjectsService();
