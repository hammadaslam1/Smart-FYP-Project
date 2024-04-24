import { Box, Button, Card, Typography } from "@mui/material";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from 'axios';
const LoginForm = (props) => {
    const url = "http://localhost/fyp-backend/login.php";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValidate, setEmailValidate] = useState(false);
    const [passwordValidate, setPasswordValidate] = useState(false);
    const [loginValidate, setLoginValidate] = useState(false);

    const formValidation = () => {
        setEmailValidate(emailRegex.test(email));
        setPasswordValidate(password.length >= 5);
    };

    const handleLogin = () => {
        
        let fData = new FormData();
        fData.append("email", email);
        fData.append("password", password);
        axios
        .post(url, fData)
        .then((response) => {
            console.log(response)
          if(response.data){
            alert('loginSuccessful');
          }
          else{
            alert('loginFailed');
          };
        })
        .catch((e) => alert(e.message));
    
    }

    useEffect(() => {
    }, [emailValidate, passwordValidate, handleLogin]);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        formValidation();
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        formValidation();
    };
    return (
        <Card elevation={10} className="innerCard">
            <Box className="loginCard">
                <Typography
                    className="loginRightHeading"
                    variant="h4"
                    color={"#08422D"}
                >
                    Login
                </Typography>
                <EmailField onChange={handleEmail} className="loginFields" />
                <PasswordField
                    onChange={handlePassword}
                    className="loginFields"
                />
                <Button
                    className="loginButton"
                    variant="contained"
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <Typography className="loginNotRegister">
                    Not already registered?{" "}
                    <Link className="loginRegisterLink" to="#" onClick={props.toggleProp} >Register</Link>{" "}
                </Typography>
            </Box>
        </Card>
    );
};

export default LoginForm;
