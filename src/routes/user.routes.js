import { Router } from "express"
import {
getUsers,
getUser,
createUser,
deleteUser,
uploadUserImage
} from "../controllers/user.controllers.js"

import { upload } from "../middleware/upload.middleware.js"

const router = Router()

router.get("/", getUsers)
router.post("/", createUser)
router.post("/upload", upload.single("image"), uploadUserImage)
router.get("/:id", getUser)
router.delete("/:id", deleteUser)

export default router