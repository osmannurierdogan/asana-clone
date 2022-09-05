//const { insert } = require("../services/ProjectsService.js");
const ProjectsService = require("../services/ProjectsService.js");
const getAll = async (req, res) => {
  const projects = await ProjectsService.findAll();
  res.render("projects", { projects: projects });
  //res.send("Projects Index");
};
const getById = async (req, res) => {
  const project = await ProjectsService.findById(req.params.id);
  res.render("projects", { project: project });
  //res.send("Projects Index");
};
const create = async (req, res) => {
  //res.render("Projects Create");
  //insert({});

  const projectData = {
    name: req.body.name,
    user_id: "63161366aeef0cac89bd2123",
  };
  const addProject = await ProjectsService.add(projectData);
  res.send("Projects Create");
};
const remove = async (req, res) => {
  // res.send("Projects Remove");
  const itemId = await ProjectsService.delete(req.params.id);
  res.render("projects");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
