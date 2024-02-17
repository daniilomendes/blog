import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const test = (req, res) => {
  res.json({ message: "Controller conectado!" });
};

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "Você não tem permissão para atualizar este usuário.")
    );
  }
  if (req.body.password) {
    if (req.body.password.length < 6) {
      return next(
        errorHandler(400, "A senha deve ter pelo menos 6 caracteres.")
      );
    }
    req.body.password = bcryptjs.hashSync(req.body.password, 10);
  }
  if (req.body.username) {
    if (req.body.username.length < 7 || req.body.username.length > 20) {
      return next(
        errorHandler(400, "O nome de usuário deve ter entre 7 a 20 caracteres.")
      );
    }
    if (req.body.username.includes(" ")) {
      return next(
        errorHandler(400, "O nome de usuário não pode conter espaços.")
      );
    }
    if (req.body.username !== req.body.username.toLowerCase()) {
      return next(
        errorHandler(
          400,
          "O nome de usuário deve conter apenas letras minúsculas."
        )
      );
    }
    if (!req.body.username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "O nome do usuário só pode conter letras e números.")
      );
    }
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          profilePicture: req.body.profilePicture,
          password: req.body.password,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser  = async (req, res, next) => {
  if (req.user.id !== req.params.userId) {
    return next(
      errorHandler(403, "Você não tem permissão para deletar este usuário.")
    );
  }

  try {
    await User.findByIdAndDelete(req.params.userId)
    res.status(200).json("Usuário deleletado!")
  } catch (error) {
    next(error)
  }
}