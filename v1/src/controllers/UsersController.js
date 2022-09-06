const UsersService = require("../services/UsersService.js");
const { passwordToHash } = require("../scripts/utils/HashPassword.js");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/Tokens.js");

const getAll = async (req, res) => {
  const users = await UsersService.findAll();
  res.render("users", { users: users });
};
const getById = async (req, res) => {
  const user = await UsersService.findById(req.params.id);
  res.render("users", { user: user });
};
const create = async (req, res) => {
  // const userData = {
  //   full_name: "Osman Nuri Erdogan",
  //   password: "1111",
  //   email: "osmerd04@gmail.com",
  //   profile_image: "profile image url",
  // };
  req.body.password = passwordToHash(req.body.password);
  //console.log(req.body.password, crytedPassword);
  await UsersService.add(req.body);
  res.render("users");
};
const remove = async (req, res) => {
  const itemId = await UsersService.delete(req.params.id);
  res.render("users");
};

const login = async (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  let loggedInUser = await UsersService.login(req.body);
  console.log("loggedInUser Before :>> ", loggedInUser);
  if (!loggedInUser) {
    return "Cannot login with provided data!";
  } else {
    loggedInUser = {
      ...loggedInUser.toObject(),
      tokens: {
        access_token: generateAccessToken(loggedInUser),
        refresh_token: generateRefreshToken(loggedInUser),
      },
    };
    delete loggedInUser.password;
  }
  console.log("loggedInUser After :>> ", loggedInUser);
  res.render("login", { user: loggedInUser });
};
const getLoginData = async (req, res) => {
  const loggedInUser = await UsersService.login(req.body);
  res.render("login", { user: loggedInUser });
};
module.exports = {
  getAll,
  getById,
  create,
  remove,
  login,
  getLoginData,
};
