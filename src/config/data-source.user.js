import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { UserEntity } from "../models/user.entity.js";
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  // synchronize: entitylar asosida jadvallarni avtomatik yaratadi/yangilaydi.
  // O'rganish uchun ZO'R, productionda ASLO ishlatmang — migratsiyalardan foydalaning.
  synchronize: true,
  logging: true, // TypeORM bajarayotgan SQL ni ko'rsatadi — darsda foydali
  entities: [UserEntity],
});