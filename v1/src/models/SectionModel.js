const mongoose = require("mongoose");
const SectionLogger = require("../scripts/logger/SectionLogger.js");

const SectionSchema = new mongoose.Schema(
  {
    name: String,
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
      },
    },
    project_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Project",
      autopopulate: {
        maxDepth: 1,
      },
    },
    order: Number,
  },
  { versionKey: false, timestamps: true }
);
SectionSchema.post("save", (doc) => {
  SectionLogger.log({
    level: "info",
    message: doc,
  });
});

SectionSchema.plugin(require("mongoose-autopopulate"));
const SectionModel = mongoose.model("Section", SectionSchema);
module.exports = SectionModel;
