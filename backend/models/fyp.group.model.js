import mongoose from "mongoose";

const Schema = mongoose.Schema;

const groupSchema = new Schema({
  team_lead: Object,
  class: String,
  supervisor: String,
  members: [Object],
  status:{
    type: Boolean,
    default: false
  },
  idea:{
    title:String,
    description:String,
  },
  weeklyreport:[Object],
  documentation:{
    proposal:{
      filename:String,
      path:String,
      evalutaion:[String],
    },
    defense:{
      filename:String,
      path:String,
      evalutaion:[String],

    },
    documentation:{
      filename:String,
      path:String,
      evalutaion:[String],
    },
    presentation:{
      filename:String,
      path:String,
      evalutaion:[String],
    },
  },
  finalevaluation:[String]
});

const getGroupModel = (getAllGroups) => {
  return mongoose.model('fyp-groups', groupSchema);
};

export default getGroupModel;
