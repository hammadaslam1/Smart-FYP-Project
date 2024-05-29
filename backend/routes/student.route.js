import express from "express";
import { getStudent, getStudents } from "../controllers/students.controller.js";

const router = express.Router();

router.get("/getAllStudents", getStudents);
router.get("/getStudent/:id", getStudent);

export default router;
