import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import studentRoutes from "./routes/student.route.js";
import supervisorRoutes from "./routes/supervisor.route.js";
import groupsRoutes from "./routes/fyp.group.route.js";
import { connString } from "../ENV.js";
import cookieParser from "cookie-parser";
import path from "path";
import bodyParser from 'body-parser';
import multer from "multer";
dotenv.config();

mongoose
  .connect(connString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"))
  .catch((e) => console.log(e))
  .finally(() => console.log("start"));

const __dirname = path.resolve();

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});
app.listen(3001, () => {
  console.log("Server is running on port 3001!");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use('/api/supervisor',supervisorRoutes);
app.use('/api/groups',groupsRoutes);
app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

// app.use((err, req, res, next) => {
//   const statusCode = err.statusCode || 500;
//   const message = err.message || "Internal Server Error";
//   res.status(statusCode).json({
//     success: false,
//     statusCode,
//     message,
//   });
// });

