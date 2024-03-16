import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import {
  registerValidation,
  validationErrors,
} from "../middlewares/auth.middleware.js";

export const authRouter = express.Router();

authRouter.post("/register", registerValidation, validationErrors, register);

authRouter.post("/login", login);
