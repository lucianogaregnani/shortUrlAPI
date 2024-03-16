import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    index: {
      unique: true,
    },
    lowercase: true,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);

    next();
  } catch (error) {
    throw new Error("Hash failed");
  }
});

export const User = mongoose.model("User", userSchema);
