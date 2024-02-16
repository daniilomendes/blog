import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.listen(3000, () => {
  console.log("Servidor iniciado na porta 3000!");
});
