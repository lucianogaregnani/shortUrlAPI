import { User } from "../models/index.js";

export const login = (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ email, password });
};

export const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        password,
      });

      await user.save();
    } else {
      throw new Error("The user already exist");
    }

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(200).json({ error: error.message });
  }
};
