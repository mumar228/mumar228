import mongoose from "mongoose"

const todoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			lowercase: true,
		},
		completed: {
			type: Boolean,
			default: false,
		},
		userImage: {
			type: String,
		}
	},
	{
		timestamps: true,
	}
)

const Todo = mongoose.model("Todo", todoSchema)

export default Todo