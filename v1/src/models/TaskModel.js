const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    due_date: Date,
    assigned_to: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
      },
    },
    statuses: Array,
    section_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Section",
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
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      autopopulate: {
        maxDepth: 1,
      },
    },
    order: Number,
    isCompleted: Boolean,
    comments: Array,
    media: Array,
    sub_tasks: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Task",
      autopopulate: {
        maxDepth: 1,
      },
    },
  },
  { versionKey: false, timestamps: true }
);

TaskSchema.plugin(require("mongoose-autopopulate"));
const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;
