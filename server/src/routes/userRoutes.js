import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { loginUser, registerUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

export { router as userRouter };
