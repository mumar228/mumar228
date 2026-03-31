import Joi from "joi";

export const createTodoSchema = Joi.object({
	title: Joi.string().min(2).max(50).required(),
	description: Joi.string().min(2).max(20).required(),
});