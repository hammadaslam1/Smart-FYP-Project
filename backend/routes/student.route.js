import express from "express";
import { getStudent, getStudents, sendMessage } from "../controllers/students.controller.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/sendmessage", sendMessage);
router.get("/getstudent/:id", getStudent);

export default router;
