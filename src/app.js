import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import userRoutes from "./routes/todos.routes.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use("/todos", userRoutes)


const PORT = process.env.PORT || 3012

const startServer = async () => {
	await connectDB()

	app.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`)
	})
}

startServer()