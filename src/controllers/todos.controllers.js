import { AppDataSource } from "../config/data-source.js"; // O'zingizning dataSource faylingiz yo'lini yozing
import * as todosService from "../services/todos.services.js";
import { TodoEntity } from "../models/todos.entity.js";

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


export const createTodo = async (data) => {
  const todoRepository = AppDataSource.getRepository(TodoEntity);
  
  const todo = todoRepository.create(data);
  const savedTodo = await todoRepository.save(todo);

  return savedTodo.id
}
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


