import { Button, CardContent, CardHeader } from "@mui/material";
import BarGraph from "../components/progress/BarGraph";
import LineGraph from "../components/progress/LineGraph";
import PieGraph from "../components/progress/PieGraph";
import Gauge from "../components/progress/Guage";

const Dashboard = () => {
  return (
    <div style={{}}>
      <BarGraph />
      <LineGraph />
      <PieGraph />
      <Gauge />
    </div>
  );
};

export default Dashboard;
