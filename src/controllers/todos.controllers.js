import * as todosService from "../services/todos.services.js"

export const getTodos = async (req, res, next) => {
	try {
		const todos = await todosService.getAllTodos(req.query)
		res.json(todos)
	} catch (error) {
		next(error)
	}
}

export const uploadTodosImage = async (req, res, next) => {
	try {
		const file = req.file

		res.json({
			message: "File uploaded",
			filename: file.filename,
			path: file.path,
		})
	} catch (error) {
		next(error)
	}
}

export const getTodo = async (req, res, next) => {
	try {
		const todo = await todosService.getTodoById(req.params.id)
		res.json(todo)
	} catch (error) {
		next(error)
	}
}

export const createTodo = async (req, res, next) => {
	try {
		const todo = await todosService.createTodo(req.body)
		res.status(201).json(todo)
	} catch (error) {
		next(error)
	}
}

export const deleteTodo = async (req, res, next) => {
	try {
		const deletedTodo = await todosService.deleteTodo(req.params.id)

		res.json({
			message: "Todo deleted",
			todo: deletedTodo,
		})
	} catch (error) {
		next(error)
	}
}
