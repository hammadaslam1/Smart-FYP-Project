import { Box,Typography,Card} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const CoordinatorDashboard = () => {
  const navigate = useNavigate();
  return (
    
    <Box sx={{ pt: 10 }}>
      <Typography variant="h4" sx={{ color: "#08422D", p: 3, fontWeight: 600 }}>
      Coordinator Dashboard
      </Typography>
      <Card
        sx={{
          px: 3,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        elevation={0}
      >
        <PrimaryButton   onClick={() => {
            navigate("/view-fyp-groups");
          }} sx={{ width: "33%", height: "150px", my: 1 }}>
          View FYP Groups
        </PrimaryButton>
        <PrimaryButton  onClick={() => {
            navigate("/manage-groups");
          }} sx={{ width: "33%", height: "150px", my: 1 }}>
        Manage Groups
        </PrimaryButton>
        <PrimaryButton  onClick={() => {
            navigate("/announcements");
          }} sx={{ width: "33%", height: "150px", my: 1 }}>
          Announcements
        </PrimaryButton>
        <PrimaryButton  onClick={() => {
            navigate("/weekly-progress-evaluation");
          }} sx={{ width: "33%", height: "150px", my: 1 }}>
          Evaluate Weekly Progress
        </PrimaryButton>
        <PrimaryButton  onClick={() => {
            navigate("/report-evaluation");
          }} sx={{ width: "33%", height: "150px", my: 1 }}>
           Report Evaluation
        </PrimaryButton>
        <PrimaryButton sx={{ width: "33%", height: "150px", my: 1 }}>
        View Student Final Report
        </PrimaryButton>
      </Card>
    </Box>
  );
};

export default CoordinatorDashboard;
