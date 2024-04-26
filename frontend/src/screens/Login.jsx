import { Box, Typography } from "@mui/material";
import "../styles/Login.css";
import "../styles/Register.css";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import { useState } from "react";
const Login = () => {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <Box className="loginBox">
      <Box className="mainBox">
        <Box className="loginLeftBox">
          <div className="ueLogo"></div>
          <Typography className="loginLeftHeading" fontSize={"2.4rem"}>
            Welcome to Smart FYP Portal
          </Typography>
          <Typography className="loginLeftPara">
            Explore a dynamic platform designed for students to enroll and
            showcase their ambitious projects. Supervisors can effortlessly
            review weekly progress, fostering mentorship, while the principal
            gains insights into outstanding contributions. Together, let's shape
            a future of groundbreaking achievements in academia.
          </Typography>
        </Box>
        <Box className="loginRightBox">
          {showLoginForm ? (
            <LoginForm toggleProp={handleToggleForm} />
          ) : (
            <RegisterForm toggleProp={handleToggleForm} />
          )}
          {/* <LoginForm /> */}
          {/* <RegisterForm/> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
