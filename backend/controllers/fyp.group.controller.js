import mongoose from "mongoose";
import getGroupModel from '../models/fyp.group.model.js';
export const insertGroup = async (req, res) => {
    const groupObject = req.body;
    const Group = getGroupModel();
    try {
      const group = await Group.create(groupObject);
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
      status:!req.body.status
    }
  );
  if (!group) {
    return res.status(400).json({ error: "Item not found!" });
  }
  res.status(200).json(group);
};