module.exports = class Service {
  async findAll() {
    return this.model.find();
  }
  async findById(itemId) {
    return this.model.findById(itemId);
  }
  async add(item) {
    return this.model.create(item);
  }
  async delete(itemId) {
    return this.model.deleteOne({ _id: itemId });
  }
};
