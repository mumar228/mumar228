import { AppDataSource } from "../config/data-source.js";
import { UserEntity } from "../models/user.entity.js";

const userRepo = AppDataSource.getRepository(UserEntity);

export const findAllUsers = async () => {
  return userRepo.find({ order: { id: "DESC" } });
};

export const findUserById = async (id) => {
  return userRepo.findOneBy({ id });
};


export const findUserByEmail = async (email) => {
  return userRepo.findOneBy({ email });
};

export const createUser = async ({ name, email, age, password, role }) => {
  const user = userRepo.create({ name, email, age, password, role });
  return userRepo.save(user);
};

export const deleteUserById = async (id) => {
  const user = await userRepo.findOneBy({ id });
  if (!user) return null;
  await userRepo.remove(user);
  return user;
};

export const findUserByTelegramChatId = async (telegramChatId) => {
  return userRepo.findOneBy({ telegramChatId: String(telegramChatId) });
};

export const findAllUserChatId = async () => {
  return userRepo.find({ order: { telegramChatId: "DESC" } });
}

export const createUserFromBot = async ({ name, email, telegramChatId }) => {
  const user = userRepo.create({
    name,
    email,
    telegramChatId: String(telegramChatId), // bigint -> string saqlanadi
    password: "telegram-user", // bot userlari uchun placeholder
    role: "user",
  });
  return userRepo.save(user);
};