"use server";

import Todo from "@/models/Todo";
import { connectDB } from "./connectDB";
import { revalidateTag } from "next/cache";

export async function createTodo(formData) {
  try {
    const { title, description } = JSON.parse(formData);

    await connectDB();
    const todo = await Todo.create({
      title,
      description,
    });

    const data = JSON.stringify(todo);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating todo" + err.message);
  }
}

export async function editTodo(todoId, formData) {
  try {
    const { title, description } = JSON.parse(formData);

    connectDB();

    const updateTodo = await Todo.findByIdAndUpdate(
      { _id: todoId },
      {
        $set: {
          title,
          description,
        },
      },
      {
        new: true,
        lean: true,
      },
    );

    const data = JSON.stringify(updateTodo);

    revalidateTag("/todos", "page");
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating todo" + err.message);
  }
}

export async function deleteTodo(todoId) {
  try {
    connectDB();

    const deletedTodo = await Todo.findByIdAndDelete(todoId, { new: true });

    const data = JSON.stringify(deletedTodo);

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating todo" + err.message);
  }
}

export async function getTodos() {
  try {
    connectDB();

    const todos = await Todo.find({}).lean().select("-updatedAt");

    const data = JSON.stringify(todos);

    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Error getting todos" + err.message);
  }
}

export async function checkTodo(todoId, todoStatus) {
  try {
    const checkedTodo = await Todo.findByIdAndUpdate(
      { _id: todoId },
      {
        $set: {
          completed: todoStatus,
        },
      },
      {
        new: true,
        lean: true,
        select: "-createdAt",
      },
    );

    const data = JSON.stringify(checkedTodo);
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Error creating todo" + err.message);
  }
}
