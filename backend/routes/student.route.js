import express from "express";
import { getStudent, getStudentMessages, getStudents, sendMessage } from "../controllers/students.controller.js";

const router = express.Router();

router.get("/", getStudents);
router.post("/sendmessage", sendMessage);
router.get("/getstudent/:id", getStudent);
router.get("/getstudentmessages/:id", getStudentMessages);

export default router;
