import { Button, CardContent, CardHeader } from "@mui/material";
import BarGraph from "../../components/progress/BarGraph";
import LineGraph from "../../components/progress/LineGraph";
import PieGraph from "../../components/progress/PieGraph";
import Gauge from "../../components/progress/Guage";
import '../../styles/studentcomponentsstyles/StudentDashboard.css';
const StudentDashboard = () => {
  return (
    <>
      <h1>
        Student Dashboard
      </h1>
      <div className="buttonsDiv">
        <button className="dashboardBigButton">Create Project Group</button>
        <button className="dashboardBigButton">Submit Project Idea</button>
        <button className="dashboardBigButton">Submit Documentation</button>
        <button className="dashboardBigButton">Submit Weekly Progress Report</button>
        <button className="dashboardBigButton">View Weekly Progress Evaluation</button>
        <button className="dashboardBigButton">View Documentation Evaluation</button>
        <button className="dashboardBigButton">View Final Evaluation</button>
      </div>
    </>
    // <div style={{}}>
    //   {/* <BarGraph /> */}
    //   {/* <LineGraph /> */}
    //   {/* <PieGraph /> */}
    //   {/* <Gauge /> */}
    // </div>
  );
};

export default StudentDashboard;
