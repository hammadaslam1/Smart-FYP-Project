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
    title:{
      type: String,
      default: "",
    },
    description:{
      type: String,
      default: "",
    },
  },
  weeklyreport:{
    type: [Object],
    default: [{}],
  },
  documentation:{
    proposal:{
      filename:{
        type: String,
        default: "",
      },
      path:{
        type: String,
        default: "",
      },
      evalutaion:{
        type: [String],
        default: [""],
      },
    },
    defense:{
      filename:{
        type: String,
        default: "",
      },
      path:{
        type: String,
        default: "",
      },
      evalutaion:{
        type: [String],
        default: [""],
      },

    },
    final_documentation:{
      filename:{
        type: String,
        default: "",
      },
      path:{
        type: String,
        default: "",
      },
      evalutaion:{
        type: [String],
        default: [''],
      },
    },
    presentation:{
      filename:{
        type: String,
        default: "",
      },
      path:{
        type: String,
        default: "",
      },
      evalutaion:{
        type: [String],
        default: [""],
      },
    },
  },
  finalevaluation:{
    type: [String],
    default: [""],
  },
  progress:{
    type:Number,
    default:0,
  }
});

const getGroupModel = (getAllGroups) => {
  return mongoose.model('fyp-groups', groupSchema);
};

export default getGroupModel;
