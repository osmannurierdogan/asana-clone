const BaseService = require("./BaseService.js");
const SectionModel = require("../models/SectionModel.js");

class SectionsService extends BaseService {
  model = SectionModel;
}
// const insert = (sectionData) => {
//   SectionModel.save(sectionData);
// };
module.exports = new SectionsService();
