const BaseService = require("./BaseService.js");
const ProjectModel = require("../models/ProjectModel.js");

class ProjectsService extends BaseService {
  model = ProjectModel;
}
// const insert = (projectData) => {
//   ProjectModel.save(projectData);
// };
module.exports = new ProjectsService();
