import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 1,
      trim: true,
      lowerCase: true,
    },
    description: {
      type: String,
      required: true,
      minLength: 10,
      trim: true,
      lowerCase: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

let Todo = (mongoose.models = {});

Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema);

export default Todo;
