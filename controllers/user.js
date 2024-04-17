import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json({
    success: true,
    users,
  });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });
  res.status(201).cookie("Newbie", "Nnavi").json({
    success: true,
    message: "Registerd Successfully",
  });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.query;
  // const user= await User.findById(id);
  console.log(req.params);
  res.json({
    success: true,
    user: {},
  });
};
