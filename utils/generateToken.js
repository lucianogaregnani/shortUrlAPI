import jwt from "jsonwebtoken";

export const generateToken = (uid) => {
  try {
    const expiresIn = 60 * 15;

    const token = jwt.sign({ uid }, process.env.JWT_SECRET);

    return { token, expiresIn };
  } catch (error) {
    throw new Error(error.message);
  }
};
