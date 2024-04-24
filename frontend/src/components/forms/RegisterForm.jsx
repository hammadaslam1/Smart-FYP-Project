import { Box, Button, Card, Typography } from "@mui/material";
import "../../styles/Register.css";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import { Link } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import NameField from "../fields/NameField";
import ConfirmPasswordField from "../fields/ConfirmPasswordField";
import RoleSelectField from "../fields/RoleSelectField";
const RegisterForm = (props) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("-");
    const [confirmPassword, setConfirmPassword] = useState("+");
    const [role, setRole] = useState("");
    const url = "http://localhost/fyp-backend/register.php";
    const handleRegister = () => {
        if (password === confirmPassword) {
            let fData = new FormData();
            fData.append("name", name);
            fData.append("email", email);
            fData.append("role", role);
            fData.append("password", password);
            axios
                .post(url, fData)
                .then((response) => {
                    console.log(response);
                    if (response.data) {
                        alert("registered successfully");
                    } else {
                        alert("registration failed");
                    }
                })
                .catch((e) => alert(e.message));
        } else {
            alert("password and confirm password dont match");
        }
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
        setRole(e.target.value);
    };
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
                <ConfirmPasswordField
                    onChange={handleConfirmPassword}
                    className="registerFields"
                />
                <RoleSelectField onChange={handleSelectChange} value={role} />
                
                <Button
                    className="registerButton"
                    variant="contained"
                    onClick={handleRegister}
                >
                    Register
                </Button>
                <Typography className="loginNotRegister">
                    Already registered?{" "}
                    <Link className="registerLoginLink" to="#" onClick={props.toggleProp}>Login</Link>{" "}
                </Typography>
            </Box>
        </Card>
    );
};

export default RegisterForm;
