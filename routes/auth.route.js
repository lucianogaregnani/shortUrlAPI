import express from "express";
import { infoUser, login, register } from "../controllers/auth.controller.js";
import {
  registerValidation,
  validationErrors,
} from "../middlewares/auth.middleware.js";
import { requireToken } from "../utils/requireToken.js";

export const authRouter = express.Router();

authRouter.post("/register", registerValidation, validationErrors, register);

authRouter.post("/login", login);

authRouter.get("/protected", requireToken, infoUser);
