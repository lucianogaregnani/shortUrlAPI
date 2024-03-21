import express from "express";
import "dotenv/config.js";
import "./database/connectDB.js";
import cookieParser from "cookie-parser";
import { authRouter, linkRouter } from "./routes/index.js";
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/link", linkRouter);

app.listen(PORT, () => {
  console.log(`App running in: http://localhost:${PORT} 👍👍👍`);
});
