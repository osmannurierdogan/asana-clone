const BaseService = require("./BaseService.js");
const UserModel = require("../models/UserModel.js");

class UsersService extends BaseService {
  model = UserModel;
}
// const insert = (userData) => {
//   UserModel.save(userData);
// };
module.exports = new UsersService();
