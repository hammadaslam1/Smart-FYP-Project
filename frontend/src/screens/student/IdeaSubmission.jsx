import { Box, Card, TextField, Typography } from "@mui/material";
import "../../styles/studentcomponentsstyles/ideasubmission.css";
import SignupInput from "../../components/inputs/SignupInput";
import PrimaryButton from "../../components/buttons/PrimaryButton";
const IdeaSubmission = () => {
  return (
    <Box  sx={{ pt: 10 }}>
      <Typography variant="h4" sx={{ p: 3, color: "#08422D", fontWeight: 600 }}>Project Idea Submission</Typography>
      <Card elevation={0} sx={{p:3}} >
        <Typography variant="body1">Project's Idea:</Typography>
      <SignupInput   color="success" />
      <Typography variant="body1">Project's Description:</Typography>
      <TextField  color="success"  multiline minRows={3} sx={{ mx: 0 }} fullWidth></TextField>
       <PrimaryButton
       
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
