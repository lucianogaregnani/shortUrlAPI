import express from "express";
import "dotenv/config.js"
import "./database/connectDB.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`App running in: http://localhost:${PORT} 👍👍👍`);
});
