import * as Notesrepositoryies from "../repositories/note.repositories.js";

export const getAllNotes = async (query) => {
  const filters = {};

  if (query.day) {
    filters.Day = query.day;
  }

  if (query.userID) {
    filters.userID = query.userID;
  }

  const page = parseInt(query.page, 10) || 1;
  const limit = parseInt(query.limit, 10) || 10;

  return Notesrepositoryies.findAllNotes(filters, page, limit);
};

export const getNoteById = async (id) => {x
  const note = await Notesrepositoryies.findNoteById(id);

  if (!note) {
    const error = new Error("Note not found");
    error.statusCode = 404;
    throw error;
  }

  return note;
};
export const createNote = async (data) => {
  const { text, userID, Day, completed } = data;

  if (!text || !userID) {
    const error = new Error("Text and userID required");
    error.statusCode = 400;
    throw error;
  }
  return Notesrepositoryies.createNote({ text, userID, Day, completed });
};

export const deleteNote = async (id) => {
  const deletedNote = await Notesrepositoryies.deleteNoteById(id);

  if (!deletedNote) {
    const error = new Error("Note not found");
    error.statusCode = 404;
    throw error;
  }

  return deletedNote;
};

export const updateNote = async (id, data) => {
  const updatedNote = await Notesrepositoryies.updateNote(id, data);

  if (!updatedNote) {
    const error = new Error("Note not found");
    error.statusCode = 404;
    throw error;
  }

  return updatedNote;
};
