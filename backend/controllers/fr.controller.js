import getGroupModel from "../models/fyp.group.model.js";

export const submitFRs = async (req, res) => {
  try {
    console.log(req.body);
    const { group_id, FRs } = req.body;
    console.log(group_id, FRs);

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
