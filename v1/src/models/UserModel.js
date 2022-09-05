const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    full_name: String,
    password: String,
    email: String,
    profile_image: String,
  },
  { versionKey: false, timestamps: true }
);

UserSchema.plugin(require("mongoose-autopopulate"));
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
