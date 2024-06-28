import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  student_id: String,
  student_name: String,
  id_: String,
  group:{
    group_id:{
      type: String,
      default: "",
    },
    status:{
      type: Boolean,
      default: false,
    },
    shift:String, 
  }
});

const getStudentModel = () => {
  return mongoose.model("students", studentSchema);
};

export default getStudentModel;
