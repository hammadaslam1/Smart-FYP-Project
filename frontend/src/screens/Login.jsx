/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from "@mui/material";
import "../styles/Login.css";
import "../styles/Register.css";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME } from "../routes/Routes";
import ueLogo from "../components/assets/logos/ue-logo.png"
const Login = () => {
  const { currentUser } = useSelector((state) => state.user);
  // const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      // return navigate(HOME);
    }
  }, []);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const handleToggleForm = () => {
    setShowLoginForm(!showLoginForm);
    console.log("heheh")
  };

  return (
    <Box className="loginBox">
      <Box className="mainBox">
        <Box className="loginLeftBox">
          <div >
            <img src={ueLogo} alt="" width={350}/>
          </div>
          <Typography className="loginLeftHeading" fontSize={"2.4rem"} textAlign="center">
            Welcome to Smart FYP Portal
          </Typography>
          <Typography className="loginLeftPara" textAlign="center">
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
