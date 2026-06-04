import { Router } from "express";
import { validate } from "../middleware/validators.middleware.js";
import { protect } from "../middleware/auth.middleware.js"; // ← qo'shildi
import { createTodoSchema } from "../validators/todos.validator.js";
import { getTodos, getTodo, createTodo, deleteTodo } from "../controllers/todos.controllers.js";

const router = Router();

router.get("/", protect, getTodos);           // ← protect qo'shildi
router.get("/:id", protect, getTodo);
router.post("/", protect, validate(createTodoSchema), createTodo); // ← protect qo'shildi
router.delete("/:id", protect, deleteTodo);

export default router;