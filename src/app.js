import express from "express"
import dotenv from "dotenv"
import { pool } from "./config/db.js";
import { AppDataSource } from "./config/data-source.js";
import todosRoutes from "./routes/todos.routes.js"
import userRoutes from "./routes/user.routes.js"
// import NoteRoutes from "./routes/note.routes.js"
// import AdminRoutes from "./routes/admin.routes.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use("/todos", todosRoutes)
app.use("/users", userRoutes)
app.use("/register", userRoutes)
app.use("/login", userRoutes)
// app.use("/notes", NoteRoutes)
// app.use("/admins", AdminRoutes)
// app.use("/uploads", express.static("uploads"))

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

await AppDataSource.initialize();
console.log("Postgres TypeORM orqali ulandi");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});