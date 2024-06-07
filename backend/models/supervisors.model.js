import mongoose from "mongoose";
const Schema = mongoose.Schema;
const supervisorSchema = new Schema({
    supervisor_id: String,
    supervisor_name: String,
    designation: String,
  });

  const getSupervisorModel = () => {
    return mongoose.model("supervisors", supervisorSchema);
  };
  
  export default getSupervisorModel;