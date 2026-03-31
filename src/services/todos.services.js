import * as todosRepository from "../repositories/todos.repositories.js"

export const getAllTodos = async (query) => {
	const filters = {}

	if (query.title) {
		filters.title = query.title
	}

	if (query.description) {
		filters.description = query.description
	}

	const page = parseInt(query.page, 10) || 1
	const limit = parseInt(query.limit, 10) || 10

	return todosRepository.findAllTodos(filters, page, limit)
}

export const getTodoById = async (id) => {
	const todo = await todosRepository.findTodoById(id)

	if (!todo) {
		const error = new Error("Todo not found")
		error.statusCode = 404
		throw error
	}

	return todo
}
export const createTodo = async (data) => {
	const { title, description, completed } = data

	if (!title || !description) {
		const error = new Error("Title and description required")
		error.statusCode = 400
		throw error
	}	
	return todosRepository.createTodo({ title, description, completed })
}

export const deleteTodo = async (id) => {
	const deletedTodo = await todosRepository.deleteTodoById(id)

	if (!deletedTodo) {
		const error = new Error("Todo not found")
		error.statusCode = 404
		throw error
	}

	return deletedTodo
}
