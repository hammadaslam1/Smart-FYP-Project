import getGroupModel from "../models/fyp.group.model.js";

export const submitFRs = async (req, res) => {
  try {
    const { group_id, FRs } = req.body;

    const Group = getGroupModel();
    const group = await Group.findOne({ _id: group_id });

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    group.frs = FRs;
    await group.save();

    res.status(200).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const addNewFRs = async (req, res) => {
  try {
    const { group_id, FRs } = req.body;

    const Group = getGroupModel();
    const group = await Group.findOne({ _id: group_id });

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }
    const oldFRs = group.frs;
    const newFRs = [...oldFRs, ...FRs];
    group.frs = newFRs;
    await group.save();

    res.status(200).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const updateFRs = async (req, res) => {
  try {
    const { group_id, FRs } = req.body;

    const Group = getGroupModel();
    const group = await Group.findOne({ _id: group_id });

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    group.frs = FRs;
    await group.save();

    res.status(200).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const deleteFR = async (req, res) => {
  try {
    const { group_id, FRs } = req.body;

    const Group = getGroupModel();
    const group = await Group.findOne({ _id: group_id });

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    group.frs = FRs;
    await group.save();

    res.status(200).json(group);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
export const fetchFRs = async (req, res) => {
  try {
    const { group_id } = req.body;

    const Group = getGroupModel();
    const group = await Group.findOne({ _id: group_id });

    if (!group) {
      return res.status(404).json({ message: "Group not found" });
    }

    res.status(200).json(group.frs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}