import * as todosService from "../services/todos.services.js";

export const getTodos = async (req, res, next) => {
	try {
		const todos = await todosService.getTodos();
		res.json(todos);
	} catch (error) {
		next(error);
	}
};

export const getTodo = async (req, res, next) => {
	try {
		const todo = await todosService.getTodo(Number(req.params.id));
		res.json(todo);
	} catch (error) {
		next(error);
	}
};

export const createTodo = async (req, res, next) => {
	try {
		const todo = await todosService.createTodo(req.body);
		res.status(201).json(todo);
	} catch (error) {
		next(error);
	}
};

export const deleteTodo = async (req, res, next) => {
	try {
		const todo = await todosService.deleteTodo(Number(req.params.id));
		res.json({
			message: "Todo deleted",
			todo,
		});
	} catch (error) {
		next(error);
	}
};