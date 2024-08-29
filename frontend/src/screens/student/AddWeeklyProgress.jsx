import { Box, Card, TextField, Typography } from "@mui/material";
import "../../styles/studentcomponentsstyles/addweeklyprogress.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useState } from "react";
import {useSelector} from 'react-redux'

const AddWeeklyProgress = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const id = useSelector((state)=>state.student.student.group.group_id);
  const student = useSelector((state)=>state.student.student);
  const [taskForm,setTaskForm] = useState({
    previousTask: "",
    nextTask: "",
  })
  const handleTaskChange = (e) => {
    setTaskForm({...taskForm,[e.target.name]: e.target.value})
  }
  const handleTaskSubmit = () => {
    fetch(`${url}/api/groups/submitweeklyprogress/${id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskForm),
    }).then(response => {
      if(response.ok){
        alert("Task submitted successfully!")
        setTaskForm({previousTask: "", nextTask: ""})
      }else{
        alert("Failed to submit task. Please try again.")
      }
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <Box sx={{ pt: 10 }}>
      <Typography variant="h4" sx={{ p: 3, color: "#08422D", fontWeight: 600 }}>
        Add Weekly Progress
      </Typography>
      <Typography variant="body1" sx={{ px: 3, color: "#08422D" }}>
        Provide description of your previous task and next task respectively.
      </Typography>
      <Card elevation={0} sx={{ p: 3 }}>
        <Typography
          variant="h6"
          sx={{ px: 0, color: "#08422D", fontWeight: 600 }}
        >
          Previous Task's Description
        </Typography>
        <TextField multiline minRows={3} sx={{ mx: 2 }} name="previousTask" fullWidth onChange={handleTaskChange}></TextField>
        <Typography
          variant="h6"
          sx={{ px: 0, color: "#08422D", fontWeight: 600 }}
        >
          Next Task's Description
        </Typography>
        <TextField multiline minRows={3} sx={{ mx: 2 }} name="nextTask" fullWidth onChange={handleTaskChange}></TextField>
        {/* <br /> */}
        <PrimaryButton disabled={(student.group.group_id!="" && taskForm.previousTask!="" && taskForm.nextTask!="")?false:true } sx={{ width: "150px", mt: 3 }} onClick={handleTaskSubmit}>Submit</PrimaryButton>
      </Card>
    </Box>
  );
};

export default AddWeeklyProgress;
