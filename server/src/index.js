import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes.js";
import dbConnect from "./config/dbConnect.js";

dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//connect to mongodb
dbConnect();

//routes
app.use("/api/users", userRouter);

//server
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
