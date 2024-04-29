/* eslint-disable eqeqeq */
import {
  Alert,
  Backdrop,
  Box,
  Button,
  Card,
  CircularProgress,
  Typography,
} from "@mui/material";
import "../../styles/Register.css";
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import { Link } from "react-router-dom";
import { useState } from "react";
import NameField from "../fields/NameField";
import ConfirmPasswordField from "../fields/ConfirmPasswordField";
import RoleSelectField from "../fields/RoleSelectField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeError,
  signinFailure,
  signinStart,
  signinSuccess,
} from "../../redux/userReducer/userSlice";
const RegisterForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("-");
  const [confirmPassword, setConfirmPassword] = useState("+");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);

  const handleSubmit = async () => {
    try {
      dispatch(signinStart());
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // setOpen(true);

      if (
        password == "" &&
        email == "" &&
        name == "" &&
        confirmPassword == "" &&
        role == ""
      ) {
        return dispatch(signinFailure("Please enter your password"));
      } else if (password != confirmPassword) {
        return dispatch(signinFailure("Passwords do not match"));
      }
      if (!emailRegex.test(email)) {
        return dispatch(signinFailure("Please enter a valid email address"));
      }
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          role: role,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signinFailure(data.message));
      }
      if (res.ok) {
        console.log(data);
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      return dispatch(signinFailure(error.message));
    }
  };

  return (
    <Card elevation={10} className="registerMain">
      <Box className="registerCard">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Typography className="registerHeading" variant="h4" color={"#08422D"}>
          Register
        </Typography>
        <div>
          <NameField
            onChange={(e) => {
              dispatch(removeError());
              setName(e.target.value);
            }}
            className="registerFields"
          />
          <EmailField
            onChange={(e) => {
              dispatch(removeError());
              setEmail(e.target.value);
            }}
            className="registerFields"
          />
          <PasswordField
            onChange={(e) => {
              dispatch(removeError());
              setPassword(e.target.value);
            }}
            className="registerFields"
          />
          <ConfirmPasswordField
            onChange={(e) => {
              dispatch(removeError());
              setConfirmPassword(e.target.value);
            }}
            className="registerFields"
          />
          <RoleSelectField
            onChange={(e) => {
              dispatch(removeError());
              setRole(e.target.value);
            }}
            value={role}
          />
          {error && (
            <Alert variant="filled" severity="error" sx={{ my: 2 }}>
              {error}
            </Alert>
          )}
        </div>
        <Button
          className="registerButton"
          variant="contained"
          onClick={handleSubmit}
        >
          Register
        </Button>
        <Typography className="loginNotRegister">
          Already registered?{" "}
          <Link className="registerLoginLink" to="#" onClick={props.toggleProp}>
            Login
          </Link>{" "}
        </Typography>
      </Box>
    </Card>
  );
};

export default RegisterForm;
