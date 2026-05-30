import { Router } from "express";
import { validate } from "../middleware/validators.middleware.js";
import { createTodoSchema } from "../validators/todos.validator.js";
import {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
} from "../controllers/todos.controllers.js";

const router = Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/:id", validate(createTodoSchema), createTodo);
router.delete("/:id", deleteTodo);

export default router;
