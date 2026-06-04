import Todo from "../models/todos.models.js";
import { AppDataSource } from "../config/data-source.js";
import { TodoEntity } from "../models/todos.entity.js";

const todoRepo = AppDataSource.getRepository(TodoEntity);
export const findTodosByUserId = async (userId, query) => {
  if (query?.search) {
    filter.$or = [
      { title: { $regex: query.search, $options: "i" } },
      { description: { $regex: query.search, $options: "i" } },
    ];
  }

  return Todo.find(filter);
};

export const findTodos = async (filters, page, limit) => {
  const skip = (page - 1) * limit;

  return Todo.find(filters).skip(skip).limit(limit);
};
export const findAllTodos = async () => {
  return todoRepo.find({ order: { id: "DESC" } });
};

export const findTodoById = async (id) => {
  return Todo.findById(id);
};

export const create = async (userId, data) => {
  const newTodo = new Todo({
    userId: userId,
    ...data,
  });
  return todoRepo.findOneBy({ id });
  return newTodo.save();
};

export const updateTodoById = async (id, data) => {
  return Todo.findByIdAndUpdate(id, data, { new: true });
};
export const createTodo = async ({ title, desc }) => {
  const todo = todoRepo.create({ title, desc });
  return todoRepo.save(todo); // INSERT ... RETURNING *
};

export const deleteTodoById = async (id) => {
  return Todo.findByIdAndDelete(id);

  const todo = await todoRepo.findOneBy({ id });
  if (!todo) return null;
  await todoRepo.remove(todo); // DELETE ... va o'chirilgan qatorni qaytaradi
  return todo;
};
