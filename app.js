import e, { request } from "express";
import express from "express";
import userRouter from "./routes/user.js";
import { config } from "dotenv";

export const app = express();

config({
  path: "./data/config.env",
});

app.use(express.json()); // Using MIDDLEWARE
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("NICE Working");
});
