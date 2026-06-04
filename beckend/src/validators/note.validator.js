import Joi from "joi";

export const createNoteSchema = Joi.object({
	text: Joi.string().min(2).max(50).required(),
	userID: Joi.number().required(),
	Day: Joi.string().required(),
});