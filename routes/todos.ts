import { Router } from "express";
import { Todo } from "../models/todos";
const router = Router();

let todos: Todo[] = [];

router.get("/", (req, res, next) => {
  res.status(200).json({ todos });
});

router.post("/todo", (req, res, next) => {
  const newTodo: Todo = {
    id: new Date().toISOString(),
    text: req.body.text,
  };

  todos.push(newTodo);
  res.status(201).json({ message: "Added todo", todo: newTodo });
});

router.put("/todo/:todoId", (req, res, next) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id === todoId);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: req.body.text };
    return res.status(200).json({ message: "sucess", todo: todos });
  }
  res.status(404).json({ message: "Could not find todo " });
});

router.delete("/todo/:todoId", (req, res, next) => {
  todos = todos.filter((todoItem) => {
    todoItem.id !== req.params.todoId;
  });

  res.status(200).json({ message: "sucess", todo: todos });
});
export default router;
