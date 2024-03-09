import { Box, Button, Card, Typography } from "@mui/material";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";

const LoginForm = () => {
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

    const handleLogin = useCallback(() => {
        setLoginValidate(emailValidate && passwordValidate);
    }, [emailValidate, passwordValidate]);

    useEffect(() => {
        handleLogin();
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
                    disabled={!loginValidate}
                >
                    Login
                </Button>
                <Typography className="loginNotRegister">
                    Not already registered?{" "}
                    <Link className="loginRegisterLink">Register</Link>{" "}
                </Typography>
            </Box>
        </Card>
    );
};

export default LoginForm;
