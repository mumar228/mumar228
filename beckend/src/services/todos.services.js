import * as todosRepository from "../repositories/todos.repositories.js";

const checkTodoId = (id) => {
	const parsedId = Number.parseInt(id, 10)

	if (Number.isNaN(parsedId) || parsedId <= 0) {
		const error = new Error("Invalid todo ID format")
		error.statusCode = 400
		throw error
	}

	return parsedId
}

const checkUserId = (id) => {
	const parsedId = Number.parseInt(id, 10)

	if (Number.isNaN(parsedId) || parsedId <= 0) {
		const error = new Error("Invalid user ID format")
		error.statusCode = 400
		throw error
	}

	return parsedId
}


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

export const createTodo = async (data, currentUser, adminUserId) => {
	const creatorId = checkUserId(adminUserId)

	if (currentUser.id !== creatorId) {
		const error = new Error("URL dagi user bilan token user mos emas")
		error.statusCode = 403
		throw error
	}

	if (currentUser.role !== "admin") {
		const error = new Error("Userlar todo yarata olmaydi!")
		error.statusCode = 403
		throw error
	}

	const assignedUserId = checkUserId(data.assignedTo)

	const assignedUser = await userRepository.findUserById(assignedUserId)

	if (!assignedUser) {
		const error = new Error("Biriktiriladigan user topilmadi")
		error.statusCode = 404
		throw error
	}

	if (assignedUser.role !== "user") {
		const error = new Error("Todo faqat oddiy user ga biriktiriladi")
		error.statusCode = 400
		throw error
	}

	return todoRepository.createTodo({
		title: data.title,
		description: data.description,
		isCompleted: data.isCompleted,
		assignedTo: assignedUser,
		createdBy: currentUser,
	})
}

export const deleteTodo = async (id) => {3
	const deletedTodo = await todosRepository.deleteTodoById(id);

	if (!deletedTodo) {
		const error = new Error("Todo not found");
		error.statusCode = 404;
		throw error;
	}

	return deletedTodo;
};