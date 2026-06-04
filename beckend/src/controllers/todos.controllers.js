import { AppDataSource } from "../config/data-source.js"; 
import * as todosService from "../services/todos.services.js";

export const getTodos = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const todoRepository = AppDataSource.getRepository("Todo");
    const todos = await todoRepository.find({
      where: { userId }
    });
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

export const createTodo = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    const userId = req.user.id; // ← tokendan keladi

    const todoRepository = AppDataSource.getRepository("Todo");
    const newTodo = todoRepository.create({
      title,
      description,
      userId, // ← qo'shildi
    });

    await todoRepository.save(newTodo);
    res.status(201).json({ message: "Vazifa saqlandi", data: newTodo });
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