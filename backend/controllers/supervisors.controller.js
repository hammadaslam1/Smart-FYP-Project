import mongoose from "mongoose";
import getSupervisorModel from "../models/supervisors.model.js";

export const getSupervisors = async (req, res, next) => {
  const SupervisorModel = getSupervisorModel();
  try {
    const supervisors = await SupervisorModel.find();
    res.status(200).json(supervisors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
