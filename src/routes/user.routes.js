import { Router } from "express"
import { validate } from "../middleware/validators.middleware.js"
import { createUserSchema, registerSchema, loginSchema } from "../validators/users.validator.js"
import {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  uploadUserImage,
  login,
  register,
  getAllTodos
} from "../controllers/user.controllers.js"

import { upload } from "../middleware/upload.middleware.js"

const router = Router()

router.get("/", getUsers)
router.get("/todos", getAllTodos)
router.post("/", validate(createUserSchema), createUser)
router.post("/upload", upload.single("image"), uploadUserImage)
router.post("/register", validate(registerSchema), register)
router.post("/login", validate(loginSchema), login)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)
export default router;