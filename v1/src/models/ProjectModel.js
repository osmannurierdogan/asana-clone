const mongoose = require("mongoose");
const ProjectLogger = require("../scripts/logger/ProjectLogger.js");

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
        select: "full_name email",
      },
    },
  },
  { versionKey: false, timestamps: true }
);

// ProjectSchema.pre("save", (next, doc) => {
//   console.log("Before => ", doc);
//   next();
// });
ProjectSchema.post("save", (doc) => {
  ProjectLogger.log({
    level: "info",
    message: doc,
  });
});

ProjectSchema.plugin(require("mongoose-autopopulate"));
const ProjectModel = mongoose.model("Project", ProjectSchema);
module.exports = ProjectModel;
