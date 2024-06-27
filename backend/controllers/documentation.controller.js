import getGroupModel from '../models/fyp.group.model.js';
import mongoose from "mongoose";
import path from 'path';
export const uploadDocument = async (req, res) => {
    try {
        const groupModel = getGroupModel()
        const {teamLead,type} = req.params
        const singleGroup = await groupModel.find(teamLead)
        if(type=="Proposal")
            {
                // const group = await groupModel.findByIdAndUpdate(singleGroup[0]._id, { $set: { documentation:{ proposal:{ req.file.path} }} }, { new: true })
                // res.status(200).json(group)
                
            }
      } catch (error) {
        res.status(400).send({ error: 'Failed to upload file' });
      }

}