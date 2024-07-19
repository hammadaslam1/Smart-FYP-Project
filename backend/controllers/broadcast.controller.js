import mongoose from "mongoose";
import getBroadcastModel from "../models/broadcast.model.js";
import User from "../models/user.model.js";
export const insertBroadcast = async (req, res) => {
  const { message } = req.body;
  const Broadcast = getBroadcastModel();
  const users = await User.find();
  for (const user of users) {
    try {
      user.read.broadcastsRead = false;
      user.save();
    } catch (error) {
      console.error(`Error setting the broadcasrRead property`, error);
    }
    // console.log(user);
  }
  try {
    const broadcast = await Broadcast.create({ message: message });
    if (!broadcast) {
      return res.status(404).json({ error: "error submitting broadcast" });
    }
    sliceBroadcast();
    res.status(200).json(broadcast);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const sliceBroadcast = async () => {
  const Broadcast = getBroadcastModel();
  try {
    let broadcasts = await Broadcast.find().sort({ createdAt: 1 });

    if (broadcasts.length > 10) {
      const idsToDelete = broadcasts
        .slice(0, -10)
        .map((broadcast) => broadcast._id);
      await Broadcast.deleteMany({ _id: { $in: idsToDelete } });
      broadcasts = await Broadcast.find().sort({ createdAt: -1 }).limit(10);
    }

  } catch (error) {
    console.log("Error slicing broadcasts:", error);
  }
};
export const getAllBroadcasts = async (req, res) => {
  const Broadcast = getBroadcastModel();
  try {
    const broadcasts = await Broadcast.find();

    res.status(200).json(broadcasts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
