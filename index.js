import express from "express";
import "dotenv/config.js";
import "./database/connectDB.js";
import cookieParser from "cookie-parser";
import { authRouter, linkRouter } from "./routes/index.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;
const whiteList = [process.env.ORIGIN];

app.use(
  cors({
    origin: (origin, callback) => {
      if (whiteList.includes(origin)) return callback(null, origin);
      return callback("CORS Error");
    },
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/link", linkRouter);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App running in: http://localhost:${PORT} 👍👍👍`);
});
