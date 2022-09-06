const ProjectsService = require("../services/ProjectsService.js");
const getAll = async (req, res) => {
  const projects = await ProjectsService.findAll();
  // res.render("projects", { projects: projects });
  res.send(projects);
};

const getById = async (req, res) => {
  const project = await ProjectsService.findById(req.params.id);
  res.render("projects", { project: project });
};
const create = async (req, res) => {
  const projectData = {
    name: req.body.name,
    user_id: "631663cc82983067b4f4576c",
  };
  const addProject = await ProjectsService.add(projectData);
  res.send("Projects Create");
};
const remove = async (req, res) => {
  const itemId = await ProjectsService.delete(req.params.id);
  res.render("projects");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
