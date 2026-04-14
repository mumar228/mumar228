import Note from "../models/note.model.js"

export const findAllNotes = async (filter,page,limit) => {
	const skip = (page - 1) * limit
	
	return Note.find(filter).skip(skip).limit(limit)
}

export const findNoteById = async (id) => {
	return Note.findById(id)
}

export const findNoteByEmail = async (email) => {
	return Note.findOne({ email })
}

export const createNote = async (data) => {
	return Note.create(data)
}

export const deleteNoteById = async (id) => {
	return Note.findByIdAndDelete(id)
}
export const updateNote = async (id, data) => {
	return Note.findByIdAndUpdate(id, data, { new: true })
}
