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
import EmailField from "../fields/EmailField";
import PasswordField from "../fields/PasswordField";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  signinFailure,
  signinStart,
  signinSuccess,
  removeError,
} from "../../redux/userReducer/userSlice";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const handleSubmit = async () => {
    try {
      dispatch(signinStart());
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // setOpen(true);
      if (!emailRegex.test(email)) {
        return dispatch(signinFailure("Please enter a valid email address"));
      } else if (password == "") {
        return dispatch(signinFailure("Please enter your password"));
      }
      const res = await fetch("http://localhost:3001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signinFailure(data.message));
      }
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate("/");
      }
    } catch (error) {
      return dispatch(signinFailure(error.message));
    }
  };
  return (
    <Card elevation={10} className="innerCard">
      <Box className="loginCard">
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <Typography
          className="loginRightHeading"
          variant="h4"
          color={"#08422D"}
        >
          Login
        </Typography>
        <EmailField
          onChange={(e) => {
            dispatch(removeError());
            setEmail(e.target.value);
          }}
          value={email}
          className="loginFields"
        />
        <PasswordField
          onChange={(e) => {
            dispatch(removeError());
            setPassword(e.target.value);
          }}
          value={password}
          className="loginFields"
        />
        {error && (
          <Alert variant="filled" severity="error">
            {error}
          </Alert>
        )}
        <Button
          className="loginButton"
          variant="contained"
          onClick={handleSubmit}
        >
          Login
        </Button>
        <Typography className="loginNotRegister">
          Not already registered?{" "}
          <Link className="loginRegisterLink" to="#" onClick={props.toggleProp}>
            Register
          </Link>{" "}
        </Typography>
      </Box>
    </Card>
  );
};

export default LoginForm;
