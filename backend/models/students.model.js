import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  student_id: String,
  student_name: String,
  id_: String,
});

const getStudentModel = (getAllStudents) => {
  return mongoose.model(getAllStudents, studentSchema);
};

export default getStudentModel;
