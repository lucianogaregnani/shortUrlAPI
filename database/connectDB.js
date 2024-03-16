import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("Database connected succesfully 🙌🙌🙌");
} catch (error) {
  console.log("Something is wrong with the Database 😒😒😒");
}
