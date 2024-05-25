import { Card, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../routes/Routes";
const StudentHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(DASHBOARD);
  }, []);
  return (
    <Card>
      <Typography variant="h2">student</Typography>
    </Card>
  );
};

export default StudentHome;
