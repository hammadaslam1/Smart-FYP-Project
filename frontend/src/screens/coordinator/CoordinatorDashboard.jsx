import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CoordinatorDashboard = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ pt: 10 }}>
      <h1>Coordinator Dashboard</h1>
      <div className="buttonsDiv">
      <button
          className="dashboardBigButton"
          onClick={() => {
            navigate("/fyp-groups");
          }}
        >
          View FYP Groups
        </button>
        <button
          className="dashboardBigButton"
          
        >
          Project Idea Approval
        </button>
        <button
          className="dashboardBigButton"
          onClick={() => {
            navigate("/weekly-progress-evaluation");
          }}
        >
          Evaluate Weekly Progress
        </button>
        <button
          className="dashboardBigButton"
          onClick={() => {
            navigate("/report-evaluation");
          }}
        >
         Report Evaluation
          
        </button>
        {/* //yahan jugaar hua hai Evaluate Documentation asli name */}
        <button
          className="dashboardBigButton"
          
        >
          View Student Final Report
        </button>
      </div>
    </Box>
  );
};

export default CoordinatorDashboard;
