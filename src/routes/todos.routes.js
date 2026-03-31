import { Router } from "express";
import { validate } from "../middleware/validators.middleware.js";
import { createTodoSchema } from "../validators/todos.validator.js";
import { upload, } from "../middleware/upload.middleware.js"
import {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  uploadTodosImage
} from "../controllers/todos.controllers.js";

const router = Router();

router.get("/", getTodos);
router.get("/:id", getTodo);
router.post("/upload", upload.single("image"), uploadTodosImage);
router.post("/", validate(createTodoSchema), createTodo);
router.delete("/:id", deleteTodo);

export default router;
