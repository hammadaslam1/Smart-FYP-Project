import mongoose from "mongoose";
import getGroupModel from "../models/fyp.group.model.js";
import getStudentModel from "../models/students.model.js";
import path from "path";
import fs from "fs";
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
  const { id } = req.params;
  const { title, description } = req.body;
  const ProjectIdea = getGroupModel();
  try {
    const group = await ProjectIdea.findById({ _id: id });
    if (!group) {
      return res.status(404).json({ error: "Item not found!" });
    }
    group.idea.title = title;
    group.idea.description = description;
    group.save();
    res.status(200).json(group);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const insertDocumentation = async (req, res) => {
  const { path, filename } = req.file;
  const { id, type } = req.params;

  const groupModel = getGroupModel();
  try {
    const group = await groupModel.findById({ _id: id });
    if (!group) {
      return res.status(404).json({ error: "Item not found!" });
    }
    switch (type) {
      case "Proposal":
        group.documentation.proposal.path = path;
        group.documentation.proposal.filename = filename;
        break;
      case "Defense":
        group.documentation.defense.path = path;
        group.documentation.defense.filename = filename;

        break;
      case "Final Presentation":
        group.documentation.presentation.path = path;
        group.documentation.presentation.filename = filename;

        break;
      case "Documentation":
        group.documentation.final_documentation.path = path;
        group.documentation.final_documentation.filename = filename;
        break;
      default:
        console.error(`Unknown type: ${type}`);
    }
    group.save();
    res.status(200).json(group);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDocument = async (req, res) => {
  try {
    const { id, filename } = req.params;
    const filePath = `backend/uploads/${id}/${filename}`;

    if (fs.existsSync(filePath)) {
      console.log(filePath);
      res.download(filePath, filename, { "Content-Type": "application/pdf" });
    } else {
      res
        .status(404)
        .json({ status: "error", message: "File not found on server" });
    }
  } catch (error) {
    res.status(500).json({ status: error.message });
  }
};

export const submitweeklyprogress = async (req, res) => {
  const { previousTask, nextTask } = req.body;
  const { id } = req.params;
  try {
    const Group = getGroupModel();
    const group = await Group.findById({ _id: id });
    group.weeklyreport.push({
      previousTask: previousTask,
      nextTask: nextTask,
      date: new Date(),
    });
    group.save();
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const deleteGroup = async (req, res) => {
  const { id } = req.params;
  try {
    const Group = getGroupModel();
    const group = await Group.findByIdAndDelete({ _id: id });
    if (!group) {
      return res.status(404).json({ error: "Item not found!" });
    }
    const { members } = group;
    const Student = getStudentModel();
    for (const member of members) {
      try {
        const student = await Student.findOne({
          student_id: member.student_id,
        });
        if (!student) {
          console.log(`Student with ID ${member.student_id} not found`);
          continue;
        }
        student.group.group_id = "";
        student.group.status = false;
        await student.save();
      } catch (error) {
        console.error("Error finding student:", error);
      }
    }
    res.status(200).json(group);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const sendGroupMessage = async (req, res) => {
  const { message, groups, sender, type } = req.body;
  const Student = getStudentModel();
  const Group = getGroupModel();

  try {
    for (const singleGroup of groups) {
      const group = await Group.findOne({ _id: singleGroup });
      if (!group) {
        console.log(`Group with ID ${singleGroup} not found`);
        continue;
      }

      for (const member of group.members) {
        try {
          const memberID = member.student_id;
          const student = await Student.findOne({ student_id: memberID });

          if (student) {
            console.log(message,type,sender)
            console.log(student)
            // student.notification.text = message;
            // student.notification.date = new Date();
            // student.notification.type = type;
            // student.notification.sender = sender;
            // await student.save();
            student.notifications.push({
              text:message,
              date:new Date(),
              type:type,
              sender:sender
            })
            student.save();
          } else {
            console.log(`Student with ID ${memberID} not found`);
          }
        } catch (error) {
          console.error(`Error updating student with ID ${member.student_id}:`, error);
        }
      }
    }
    res.status(200).json({ message: 'Messages sent successfully' });
  } catch (error) {
    console.error("An error occurred while sending messages:", error);
    res.status(500).json({ error: 'An error occurred while sending messages' });
  }
};

export const resetStudents = async () => {
  //   const Student = getStudentModel();
  //   const students =await  Student.find({});
  //   for (const student of students)
  //     {
  //       student.group.group_id = "";
  //       student.group.status = false;
  //       student.save();
  //     }
};

