import mongoose from "mongoose";

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  team_lead: String,
  class: String,
  supervisor: String,
  members: [String],
  status:{
    type: Boolean,
    default: false
  }
});

const getGroupModel = (getAllGroups) => {
  return mongoose.model('fyp-groups', groupSchema);
};

export default getGroupModel;
