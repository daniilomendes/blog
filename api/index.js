import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb conectado!");
  })
  .catch((err) => {
    console.log("Erro ao tentar conectar no MongoDb!");
  });

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statuscOde || 500;
  const message = err.message || "Erro interno do servidor";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
