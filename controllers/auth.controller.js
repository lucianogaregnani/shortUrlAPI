import { User } from "../models/index.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(403).json({ error: "User doesn't exist" });

    const isValidPassword = await user.comparePassword(password);

    if (!isValidPassword)
      return res.status(403).json({ error: "Enter a valid password" });

    return res.status(200).json({ user, isValidPassword });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
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
