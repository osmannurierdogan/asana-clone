const SectionsService = require("../services/SectionsService.js");
const getAll = async (req, res) => {
  //res.send("Sections Index");
  const sections = await SectionsService.findAll();
  res.render("sections", { sections: sections });
};
const getById = async (req, res) => {
  const section = await SectionsService.findById(req.params.id);
  res.render("sections", { section: section });
  //res.send("Projects Index");
};
const create = async (req, res) => {
  //res.send("Sections Create");
  const sectionData = {
    name: "Completed",
    user_id: "63161366aeef0cac89bd2123",
    project_id: "631613802a9892647673c818",
    order: 2,
  };
  await SectionsService.add(sectionData);
  res.render("sections");
};
const remove = async (req, res) => {
  // res.send("Sections Remove");
  const itemId = await SectionsService.delete(req.params.id);
  res.render("sections");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
