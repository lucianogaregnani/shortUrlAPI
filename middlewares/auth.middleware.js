import { body, param, validationResult } from "express-validator";

export const validationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return res.status(400).json(errors);

  next();
};

export const registerValidation = [
  body("email", "Enter a valid email").trim().isEmail(),
  body("password", "The password should have at least 6 characters")
    .trim()
    .isLength({ min: 6 }),
  validationErrors,
];

export const paramValidator = [
  param("id", "Invalid format").trim().notEmpty().escape(),
  validationErrors,
];
