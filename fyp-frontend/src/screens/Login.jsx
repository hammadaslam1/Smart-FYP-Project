import {  Box, Button, Card, Typography } from "@mui/material";
import '../styles/Login.css'
import PasswordField from "../components/fields/PasswordField";
import EmailField from "../components/fields/EmailField";
import { Link } from 'react-router-dom';    
const Login = () => {
    return (
        <Box className='loginBox' >
            
            <Box className='loginLeftBox'>
                <div className="ueLogo"></div>
                <Typography className="loginLeftHeading">
                    Welcome to Smart FYP Portal
                </Typography>
                <Typography className="loginLeftPara">Explore a dynamic platform designed for students to enroll and showcase their ambitious projects. Supervisors can effortlessly review weekly progress, fostering mentorship, while the principal gains insights into outstanding contributions. Together, let's shape a future of groundbreaking achievements in academia.</Typography>

            </Box>
            <Box className='loginRightBox'>
                <Card  elevation={20}>
                    <Box className="loginCard">
                        <Typography className="loginRightHeading" variant="h3">Login</Typography>
                        <EmailField className='loginFields'/>
                        <PasswordField className="loginFields"/>
                        <Button className="loginButton" variant="contained">Login</Button>
                        <Typography className="loginNotRegister">Not already registered? <Link className="loginRegisterLink">Register</Link> </Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default Login;
