import jwt from "jsonwebtoken";

export const requireToken = (req, res, next) => {
  try {
    const token = req.headers?.authorization.split(" ")[1];

    if (!token) throw new Error("Token don't exist");

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    req.uid = payload.uid;

    next();
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const requireRefreshToken = (req, res, next) => {
  try {
    const refreshToken = req.cookie.refreshToken;

    jwt.verify(refreshToken, process.env.JWT_REFRESH);

    next();
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};
