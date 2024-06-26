import jwt from "jsonwebtoken";

export const generateToken = (uid) => {
  try {
    const expiresIn = 60 * 15;

    const token = jwt.sign({ uid }, process.env.JWT_SECRET, { expiresIn });

    return { token, expiresIn };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const generateRefreshToken = (uid, res) => {
  try {
    const expiresIn = 60 * 60 * 24 * 30;

    const refreshToken = jwt.sign({ uid }, process.env.JWT_REFRESH, {
      expiresIn,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: !(process.env.MODO === "developer"),
      expires: new Date(Date.now() + expiresIn * 1000),
      sameSite: "none",
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
