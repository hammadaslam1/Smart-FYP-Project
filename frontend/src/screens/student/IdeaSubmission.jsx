import { Box, Card, TextField, Typography } from "@mui/material";
import "../../styles/studentcomponentsstyles/ideasubmission.css";
import SignupInput from "../../components/inputs/SignupInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import {useSelector} from 'react-redux'
import { useState } from "react";
const IdeaSubmission = () => {
  const handleIdeaSubmission = () => {
    alert(`Idea Title: ${title} \nIdea Description: ${description}`)
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
