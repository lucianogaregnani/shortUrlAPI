import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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

export const User = mongoose.model("User", userSchema);
