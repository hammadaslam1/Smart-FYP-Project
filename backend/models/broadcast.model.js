import mongoose from "mongoose";
const Schema = mongoose.Schema;
const broadcastSchema = new Schema({
    message: String,
    date: {
        type: Date,
        default: new Date()
    }
  });

  const getBroadcastModel = () => {
    return mongoose.model("broadcasts", broadcastSchema);
  };
  
  export default getBroadcastModel;