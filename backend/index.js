import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import studentRoutes from "./routes/student.route.js";
import supervisorRoutes from "./routes/supervisor.route.js";
import groupsRoutes from "./routes/fyp.group.route.js";
import broadcastRoutes from "./routes/broadcast.route.js";
import { connString } from "../ENV.js";
import cookieParser from "cookie-parser";
import path from "path";
import bodyParser from 'body-parser';
import multer from "multer";
import { resetStudents } from "./controllers/fyp.group.controller.js";
import { port } from '../ENV.js';
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
const hostingPort = process.env.PORT || port;
const app = express();


const allowedOrigins = process.env.ALLOWED_ORIGIN || 'http://localhost:3000';
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cookieParser());

app.listen(hostingPort, () => {
  console.log(`Server is running on port ${hostingPort}!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/student", studentRoutes);
app.use('/api/supervisor', supervisorRoutes);
app.use('/api/groups', groupsRoutes);
app.use('/api/broadcast', broadcastRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));


