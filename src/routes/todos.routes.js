import { Router } from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
} from "../controllers/todos.controllers.js";

const router = Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);

export default router;
