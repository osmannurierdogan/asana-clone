const UsersService = require("../services/UsersService.js");
const getAll = async (req, res) => {
  const users = await UsersService.findAll();
  res.render("users", { users: users });
  //res.send("Users Index");
};
const getById = async (req, res) => {
  const user = await UsersService.findById(req.params.id);
  res.render("users", { user: user });
  //res.send("Projects Index");
};
const create = async (req, res) => {
  const userData = {
    full_name: "Osman Nuri Erdogan",
    password: "1111",
    email: "osmerd04@gmail.com",
    profile_image: "profile image url",
  };
  //const addUser = await UsersService.add(userData);
  await UsersService.add(userData);
  //res.send("Users Create", { user: addUser });
  res.render("users");
};
const remove = async (req, res) => {
  // res.send("Users Remove");
  const itemId = await UsersService.delete(req.params.id);
  res.render("users");
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
};
