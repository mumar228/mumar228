import Todo from "../models/todos.models.js"

export const findAllTodos = async () => {
	return Todo.find()
}

export const findTodoById = async (id) => {
	return Todo.findById(id)
}

export const findTodoByEmail = async (email) => {
	return Todo.findOne({ email })
}

export const createTodo = async (data) => {
	return Todo.create(data)
}

export const deleteTodoById = async (id) => {
	return Todo.findByIdAndDelete(id)
}