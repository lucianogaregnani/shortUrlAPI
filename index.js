import express from "express";
import "dotenv/config.js";
import "./database/connectDB.js";
import { authRouter } from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`App running in: http://localhost:${PORT} 👍👍👍`);
});
