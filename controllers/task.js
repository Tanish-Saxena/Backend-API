import { Task } from "../models/task.js";
import { User } from "../models/user.js";
import errorHandler from "./middlewares/error.js";
export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    await Task.create({
      title,
      description,
      user: req.user,
    });
    res.status(201).json({
      success: true,
      message: "Task added successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTask = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const tasks = await Task.find({ user: userid });
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.isCompleted = !task.isCompleted;
    if (!task)
      res.status(404).json({
        success: false,
        message: "invalid ID",
      });
    await task.save();
    res.status(200).json({
      success: true,
      message: "Updated Bro, Keep Goin",
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return next(new errorHandler("TAsk Not Found", 404));
    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task DEleted",
    });
  } catch (error) {
    next(error);
  }
};
