import e, { request } from "express";
import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./controllers/middlewares/error.js";
import cors from "cors";

export const app = express();

config({
  path: "./data/config.env",
});

app.use(express.json()); // Using MIDDLEWARE
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// using Middleware
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("NICE Working");
});

app.use(errorMiddleware);
