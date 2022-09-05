const mongoose = require("mongoose");
const UserLogger = require("../scripts/logger/UserLogger.js");

const UserSchema = new mongoose.Schema(
  {
    full_name: String,
    password: String,
    email: String,
    profile_image: String,
  },
  { versionKey: false, timestamps: true }
);

UserSchema.post("save", (doc) => {
  UserLogger.log({
    level: "info",
    message: doc,
  });
});

UserSchema.plugin(require("mongoose-autopopulate"));
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
