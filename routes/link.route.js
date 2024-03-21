import express from "express";
import { requireToken } from "../utils/requireToken.js";
import {
  createLink,
  getAll,
  getByShortLink,
  removeLink,
  updateLink,
} from "../controllers/link.controller.js";

export const linkRouter = express.Router();

linkRouter.get("/", requireToken, getAll);

linkRouter.get("/:shortLink", getByShortLink);

linkRouter.post("/", requireToken, createLink);

linkRouter.patch("/:id", requireToken, updateLink);

linkRouter.delete("/:id", requireToken, removeLink);
