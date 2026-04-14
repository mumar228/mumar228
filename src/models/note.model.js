import mongoose from "mongoose"

const SchemaNote = new mongoose.Schema(
	{
		userID: {
			type: Number,
		},
		text: {
			type: String,
		},
		Day: {
			type: String,
		},
  }
)

const Note = mongoose.model("Note", SchemaNote)

export default Note