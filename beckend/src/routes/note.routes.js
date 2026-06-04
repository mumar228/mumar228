import { Router } from "express";
import { validate } from "../middleware/validators.middleware.js";
import { createNoteSchema } from "../validators/note.validator.js";

import {
  getNotes,
  getNote,
  createNote,
  deleteNote,
  updateNote,
} from "../controllers/note.controllers.js";

const router = Router();

router.get("/", getNotes);
router.get("/:id", getNote);
router.post("/", validate(createNoteSchema), createNote);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);

export default router;
