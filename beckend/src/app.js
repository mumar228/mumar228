import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // 1. CORS import qilindi
import todoRoutes from "./routes/todos.routes.js";
import userRotes from "./routes/user.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import { AppDataSource } from "./config/data-source.js";
import { startBot } from "./bot/bot.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/todos", todoRoutes);
app.use("/user", userRotes);
app.use("/admin", adminRoutes);
app.use("/uploads", express.static("uploads"));

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// startBot();

AppDataSource.initialize()
  .then(() => {
    console.log("Postgres TypeORM orqali ulandi");
    app.listen(PORT, () => {
      console.log(`Server ${PORT} portda ishlamoqda`);
    });
  })
  .catch((err) => {
    console.error("DB ulanishda xato ❌", err);
    process.exit(1); 
  });
app.use((req, res, next) => {
  console.log(`>>> ${req.method} ${req.url}`);
  next();
});