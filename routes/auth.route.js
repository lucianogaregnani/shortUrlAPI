import express from "express";
import {
  infoUser,
  login,
  logout,
  register,
  token,
} from "../controllers/auth.controller.js";
import {
  registerValidation,
  validationErrors,
} from "../middlewares/auth.middleware.js";
import { requireRefreshToken } from "../utils/requireToken.js";

export const authRouter = express.Router();

authRouter.post("/register", registerValidation, register);

authRouter.post("/login", login);

authRouter.get("/refresh", requireRefreshToken, token);

authRouter.get("/logout", logout);
