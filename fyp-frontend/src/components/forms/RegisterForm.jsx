import { Box, Button, Card, Typography } from "@mui/material";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import NameField from "../fields/NameField";
import ConfirmPasswordField from "../fields/ConfirmPasswordField";
import RoleSelectField from "../fields/RoleSelectField";
const RegisterForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");
    const url = "http://localhost/fyp-backend/login.php";
    const handleRegister = () => {
        let fData = new FormData();
        fData.append("email", email);
        fData.append("password", password);
        axios
            .post(url, fData)
            .then((response) => {
                console.log(response);
                if (response.data) {
                    alert("loginSuccessful");
                } else {
                    alert("loginFailed");
                }
            })
            .catch((e) => alert(e.message));
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const handleSelectChange = (e) => {
        setRole(e.target.value)
        alert(role)
    }
    return (
        <Card elevation={10} className="registerMain">
            <Box className="registerCard">
                <Typography
                    className="registerHeading"
                    variant="h4"
                    color={"#08422D"}
                >
                    Register
                </Typography>
                <NameField onChange={handleName} className="registerFields" />
                <EmailField onChange={handleEmail} className="registerFields" />
                <PasswordField
                    onChange={handlePassword}
                    className="registerFields"
                />
                <ConfirmPasswordField onChange={handleConfirmPassword}
                    className="registerFields"/>
                <RoleSelectField onChange={handleSelectChange} value={role}/>
                <Button
                    className="registerButton"
                    variant="contained"
                    onClick={handleRegister}
                >
                    Register
                </Button>
            </Box>
        </Card>
    );
};

export default RegisterForm;
