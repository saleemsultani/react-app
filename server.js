import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

// Config .env
dotenv.config();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// connect Database
connectDB();

//routes
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Hello world!</h1>");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} mode on port ${PORT}`
  );
});
