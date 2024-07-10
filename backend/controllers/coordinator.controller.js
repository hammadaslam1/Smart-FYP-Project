
export const getStudent = async (req, res) => {
    const { id } = req.params;
    
    try {
        const StudentModel = getStudentModel();
      const student = await StudentModel.findOne({student_id:id});
      if (!student) {
        return res.status(404).json({ error: "hehe" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ message: error.status });
    }
  };