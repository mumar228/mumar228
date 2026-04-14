import * as NoteService from "../services/note.services.js";

export const getNotes = async (req, res, next) => {
  try {
    const notes = await NoteService.getAllNotes(req.query);
    res.json(notes);
  } catch (error) {
    next(error);
  }
};

export const getNote = async (req, res, next) => {
  try {
    const note = await NoteService.getNoteById(req.params.id);
    res.json(note);
  } catch (error) {
    next(error);
  }
};

export const createNote = async (req, res, next) => {
  try {
    const note = await NoteService.createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const deletedNote = await NoteService.deleteNote(req.params.id);

    res.json({
      message: "Note deleted",
      note: deletedNote,
    });
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const updatedNote = await NoteService.updateNote(req.params.id, req.body);
    res.json(updatedNote);
  } catch (error) {
    next(error);
  }
};