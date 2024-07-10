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
    const student = await StudentModel.findOne({ student_id: id });
    if (!student) {
      return res.status(404).json({ error: "hehe" });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: error.status });
  }
};

export const sendMessage = async (req, res) => {

  const { message, members, sender, type } = req.body;
  const Student = getStudentModel();
  const memberIDs = members.map((member) => member.split(" | ")[1]);
  try {
    let jugaar = null
    console.log(memberIDs, message, sender, type);
    for (const member of memberIDs) {
      const student = await Student.findOne({
        student_id: member,
      });
      if (!student) {
        console.log(`Student with ID ${member.student_id} not found`);
        continue;
      }
      console.log(student)
      jugaar = student
      student['jugaar'] = "some value";
      student.notification.text = message;
      student.notification.sender = sender;
      student.notification.type = type;
      student.notification.date = new Date();
      await student.save();
      
    }
    res.status(200).json(jugaar);
  } catch (error) {
    console.error("Error finding student:", error);
    res.status(500).json("There was an error while sending the message");
  }
};
