import { Box, Typography } from "@mui/material";
import "../styles/Login.css";
import LoginForm from "../components/forms/LoginForm";

const Login = () => {
    return (
        <Box className="loginBox">
            <Box className="mainBox">
                <Box className="loginLeftBox">
                    <div className="ueLogo"></div>
                    <Typography
                        className="loginLeftHeading"
                        fontSize={"2.4rem"}
                    >
                        Welcome to Smart FYP Portal
                    </Typography>
                    <Typography className="loginLeftPara">
                        Explore a dynamic platform designed for students to
                        enroll and showcase their ambitious projects.
                        Supervisors can effortlessly review weekly progress,
                        fostering mentorship, while the principal gains insights
                        into outstanding contributions. Together, let's shape a
                        future of groundbreaking achievements in academia.
                    </Typography>
                </Box>
                <Box className="loginRightBox">
                    <LoginForm />
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
