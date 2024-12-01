import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./db/connection.db.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use("/", (req, res) => {
  res.send("Running...");
});

app.listen(port, () => {
  console.log(`Running on ${port}`);
  connectDB();
});
