import mongoose from "mongoose";
import getStudentModel from "../models/students.model.js";

export const getStudents = async (req, res, next) => {
    const StudentModel = getStudentModel();
  try {
    const students = await StudentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStudent = async (req, res) => {
  const { id } = req.params;
  
  try {
      const StudentModel = getStudentModel();
    const student = await StudentModel.findOne({student_id:id});
    if (!student) {
      return res.status(404).json({ error: "hehe" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.status });
  }
};
