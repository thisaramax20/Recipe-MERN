import { UserModel } from "../models/User.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.status(401).json({ message: "User already registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();
  res.status(200).json({ message: "User registered successfully" });
};

export const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
};
