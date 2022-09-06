const BaseService = require("./BaseService.js");
const UserModel = require("../models/UserModel.js");

class UsersService extends BaseService {
  model = UserModel;
  async login(loginData) {
    return this.model.findOne(loginData);
  }
}
module.exports = new UsersService();
