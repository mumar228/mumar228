import * as todosRepository from "../repositories/todos.repositories.js";

export const getTodos = async () => {
	return todosRepository.findAllTodos();
};

export const getTodo = async (id) => {
	const todo = await todosRepository.findTodoById(id);

	if (!todo) {
		const error = new Error("Todo not found");
		error.statusCode = 404;
		throw error;
	}

	return todo;
};

export const createTodo = async (data) => {
	const { title, description} = data;

	if (!title || !description) {
		const error = new Error("Title and description are required");
		error.statusCode = 400;
		throw error;
	}

	return todosRepository.createTodo({ title, description});
};

export const deleteTodo = async (id) => {3
	const deletedTodo = await todosRepository.deleteTodoById(id);

	if (!deletedTodo) {
		const error = new Error("Todo not found");
		error.statusCode = 404;
		throw error;
	}

	return deletedTodo;
};