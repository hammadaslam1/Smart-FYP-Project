import { Box, Card, TextField, Typography } from "@mui/material";
import "../../styles/studentcomponentsstyles/addweeklyprogress.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
const AddWeeklyProgress = () => {
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
        <TextField multiline minRows={3} sx={{ mx: 2 }} fullWidth></TextField>
        <Typography
          variant="h6"
          sx={{ px: 0, color: "#08422D", fontWeight: 600 }}
        >
          Next Task's Description
        </Typography>
        <TextField multiline minRows={3} sx={{ mx: 2 }} fullWidth></TextField>
        {/* <br /> */}
        <PrimaryButton sx={{ width: "150px", mt: 3 }}>Submit</PrimaryButton>
      </Card>
    </Box>
  );
};

export default AddWeeklyProgress;
