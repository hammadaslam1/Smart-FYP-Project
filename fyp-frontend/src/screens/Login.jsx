import { Box, Button, Card, Typography } from "@mui/material";
import '../styles/Login.css'
import PasswordField from "../components/fields/PasswordField";
import EmailField from "../components/fields/EmailField";
import { Link } from 'react-router-dom';    
import { useState, useEffect, useCallback } from "react";

const Login = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [loginValidate, setLoginValidate] = useState(false);

    const formValidation = () => {
        setEmailValidate(email.length > 0 && emailRegex.test(email));
        setPasswordValidate(password.length > 0 && password.length >= 5);
    }

    const handleLogin = useCallback(() => {
        setLoginValidate(emailValidate && passwordValidate);
    }, [emailValidate, passwordValidate]);

    useEffect(() => {
        handleLogin();
    }, [emailValidate, passwordValidate, handleLogin]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        formValidation();
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        formValidation();
    }

    return (
        <Box className='loginBox'>
            <Box className='loginLeftBox'>
                <div className="ueLogo"></div>
                <Typography className="loginLeftHeading">
                    Welcome to Smart FYP Portal
                </Typography>
                <Typography className="loginLeftPara">Explore a dynamic platform designed for students to enroll and showcase their ambitious projects. Supervisors can effortlessly review weekly progress, fostering mentorship, while the principal gains insights into outstanding contributions. Together, let's shape a future of groundbreaking achievements in academia.</Typography>
            </Box>
            <Box className='loginRightBox'>
                <Card elevation={20}>
                    <Box className="loginCard">
                        <Typography className="loginRightHeading" variant="h3" >Login</Typography>
                        <EmailField onChange={handleEmail} className='loginFields'/>
                        <PasswordField onChange={handlePassword} className="loginFields"/>
                        <Button className="loginButton" variant="contained" onClick={handleLogin} disabled={!loginValidate}>Login</Button>
                        <Typography className="loginNotRegister">Not already registered? <Link className="loginRegisterLink">Register</Link> </Typography>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default Login;
