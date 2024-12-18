import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//connect to mongodb
mongoose.connect(process.env.MONGO_CONNECTION_STRING);

//server
const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
