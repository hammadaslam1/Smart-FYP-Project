import { Box, Card, TextField, Typography } from "@mui/material";
import "../../styles/studentcomponentsstyles/ideasubmission.css";
import SignupInput from "../../components/inputs/SignupInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import {useSelector} from 'react-redux'
import { useState } from "react";
const IdeaSubmission = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const id = useSelector((state)=>state.student.student.group.group_id);
  const student = useSelector((state)=>state.student.student);
  const handleIdeaSubmission = () => {
    fetch(`${url}/api/groups/insertidea/${id}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description })
    }).then((response)=>{
      if(response.ok){
        alert("Idea submitted successfully!")
      }else{
        alert("Failed to submit idea!")
      }
      response.json().then((data) => {
        console.log(data);
      });
    })
  };
  const { currentUser } = useSelector((state) => state.user);
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  return (
    <Box  sx={{ pt: 10 }}>
      <Typography variant="h4" sx={{ p: 3, color: "#08422D", fontWeight: 600 }}>Project Idea Submission</Typography>
      <Card elevation={0} sx={{p:3}} >
        <Typography variant="body1">Project's Title:</Typography>
      <SignupInput   color="success" onChange={(e)=>{setTitle(e.target.value)}} />
      <Typography variant="body1">Project's Description:</Typography>
      <TextField  color="success"  onChange={(e)=>{setDescription(e.target.value)}}  multiline minRows={3} sx={{ mx: 0 }} fullWidth></TextField>
       <PrimaryButton
       onClick={handleIdeaSubmission}
       disabled={(student.group.group_id!="" && title!="" && description!="")?false:true}
       sx={{
        mt:2,
        height:"50px",
        width:"150px"
       }}>Submit</PrimaryButton>
      </Card>
    </Box>
  );
};

export default IdeaSubmission;
