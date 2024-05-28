import { Box } from "@mui/material";

const HODDashboard = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <h1>HOD Dashboard</h1>
      <div className="buttonsDiv">
        <button className="dashboardBigButton">
          View Weekly Progress Evaluation
        </button>
        <button className="dashboardBigButton">
          View Documentation Evaluation
        </button>
        <button className="dashboardBigButton">View Final Evaluation</button>
      </div>
    </Box>
  );
};

export default HODDashboard;
