import * as userRepository from "../repositories/user.repositors.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import mongoose from "mongoose";

export const getUsers = async () => {
	return userRepository.findAllUsers();
};

export const getUser = async (id) => {
	const user = await userRepository.findUserById(id);

	if (!user) {
		const error = new Error("User not found");
		error.statusCode = 404;
		throw error;
	}

	return user;
};

export const createUser = async (data) => {
	const { name, email, age } = data;

	if (!name || !email) {
		const error = new Error("Name and email are required");
		error.statusCode = 400;
		throw error;
	}

	return userRepository.createUser({ name, email, age });
};

export const deleteUser = async (id) => {
	const deletedUser = await userRepository.deleteUserById(id);

	if (!deletedUser) {
		const error = new Error("User not found");
		error.statusCode = 404;
		throw error;
	}

	return deletedUser;
};

export const register = async (data) => {
	const { name, email, password, age,role } = data


	const hashedPassword = await bcrypt.hash(password, 10)

	const user = await userRepository.createUser({
		name,
		email,
		password: hashedPassword,
		age,
    role
	})

	const token = jwt.sign(
		{ id: user._id, role: user.role },
		process.env.JWT_SECRET,
		{ expiresIn: "1d" },
	)

	return { user, token }
}

export const login = async ({ email, password }) => {
	if (!user) throw new Error("Invalid credentials")

	const isMatch = await bcrypt.compare(password, user.password)
	if (!isMatch) throw new Error("Invalid credentials")

	const token = jwt.sign(
		{ id: user._id, role: user.role },
		process.env.JWT_SECRET,
		{ expiresIn: "1d" },
	)

	return { user: { id: user._id, name: user.name, email: user.email }, token }
}