import mongoose from "mongoose";

const linkSchema = new mongoose.Schema({
  longLink: {
    type: String,
    required: true,
    trim: true,
  },
  shortLink: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
