import { Box } from "@mui/material";

const CoordinatorDashboard = () => {
  return (
    <Box sx={{ pt: 10 }}>
      <h1>Coordinator Dashboard</h1>
      <div className="buttonsDiv">
        <button className="dashboardBigButton">Project Idea Approval</button>
        <button className="dashboardBigButton">Evaluate Weekly Progress</button>
        <button className="dashboardBigButton">Evaluate Documentation</button>
        <button className="dashboardBigButton">
          View Student Final Report
        </button>
      </div>
    </Box>
  );
};

export default CoordinatorDashboard;
