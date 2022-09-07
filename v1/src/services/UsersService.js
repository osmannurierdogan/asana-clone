const BaseService = require("./BaseService.js");
const UserModel = require("../models/UserModel.js");

class UsersService extends BaseService {
  model = UserModel;
  async login(loginData) {
    return this.model.findOne(loginData);
  }
  async update(itemId, data) {
    // if (data?.password) delete data.password;
    // .reduce can be used to filter and remove unwanted keys from the data
    return this.model.findByIdAndUpdate(itemId, data, { new: true });
  }
}
module.exports = new UsersService();
