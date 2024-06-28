import mongoose from "mongoose";
import getGroupModel from "../models/fyp.group.model.js";
import getStudentModel from "../models/students.model.js";
export const insertGroup = async (req, res) => {
  const groupObject = req.body;
  const Group = getGroupModel();
  const Student = getStudentModel();
  try {
    const group = await Group.create(groupObject);
    const { members } = group;
    const groupID = group._id;
    for (const member of members) {
      try {
        const student = await Student.findOne({
          student_id: member.student_id,
        });
        if (!student) {
          console.log(`Student with ID ${member.student_id} not found`);
          continue; // Skip to the next iteration
        }
        student.group.group_id = groupID;
        student.group.status = true;
        await student.save();
      } catch (error) {
        console.error("Error finding student:", error);
      }
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getGroups = async (req, res) => {
  const Group = getGroupModel();
  try {
    const groups = await Group.find();
    res.status(200).json(groups);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateGroup = async (req, res) => {
  const Group = getGroupModel();
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "item not found!" });
  }
  const group = await Group.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
      status: !req.body.status,
    }
  );
  if (!group) {
    return res.status(400).json({ error: "Item not found!" });
  }
  res.status(200).json(group);
};
export const insertProjectIdea = async (req, res) => {
  const ProjectIdea = getGroupModel();
  try {
    const projectIdea = await ProjectIdea.create(req.body);
    res.status(200).json(projectIdea);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
