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
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "Item not found!" });
  }
  try {
    //   const StudentModel = getStudentModel(category);
    const students = await getStudentModel.findById(id);
    if (!students) {
      return res.status(404).json({ error: "Item not found!" });
    }
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
