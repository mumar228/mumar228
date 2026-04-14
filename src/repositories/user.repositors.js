import User from "../models/user.models.js"
import Todos from "../models/todos.models.js"

export const findAllUsers = async (filters, page, limit) => {
	const skip = (page - 1) * limit

	return User.find(filters).skip(skip).limit(limit)
}

export const findUserById = async (id) => {
	return User.findById(id)
}

export const findAllTodos = async (id) => {
	return Todos.findById(id)
}

export const findUserByUsername = async (username) => {
  return User.findOne({ username })
}

export const findUserByEmail = async (email) => {
	return User.findOne({ email })
}

export const createUser = async (data) => {
	return User.create(data)
}

export const deleteUserById = async (id) => {
	return User.findByIdAndDelete(id)
}