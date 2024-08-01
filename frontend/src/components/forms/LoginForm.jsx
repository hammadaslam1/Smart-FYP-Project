/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {
  Backdrop,
  // Alert,
  Card,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Dialog,
  DialogActions,
  FormControlLabel,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";

import { forwardRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import { Mail } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
// import {
//   GoogleAuthProvider,
//   getAuth,
//   onAuthStateChanged,
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
//   signInWithPopup,
// } from "../../firebase/firebase.js";
import { Alert } from "@mui/joy";
// import { auth } from "../../firebase/firebase";
import PrimaryButton from "../buttons/PrimaryButton.jsx";
import LoginInput from "../inputs/LoginInput.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import GOOGLE_IMAGE from "../../assets/google.png";
// import { useDispatch, useSelector } from "react-redux";
// import './dialog.css'
import {
  signinFailure,
  signinStart,
  signinSuccess,
  removeError,
} from "../../redux/userReducer/userSlice";

const LoginForm = ({toggleProp}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFilled, setIsFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPressed, setIsPressed] = useState(false);
  const [error,setError] = useState(null);
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  // const user = useSelector((state) => state.UserReducer.user);
  // const dispatch = useDispatch();
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSignin();
    }
  };
  const handleSignin = async () => {
    try {
      dispatch(signinStart());
      const emailRegex =
       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@ue\.edu\.pk$/i
;
      // setOpen(true);
      if (!emailRegex.test(email)) {
        return setError("Email must end with @ue.edu.pk");
      } else if (password == "") {
        return setError("Please enter your password");
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
        return setError("Sign In Failed");
      }
      if (res.ok) {
        console.log(data);
        dispatch(signinSuccess(data));
        // setOpenLogin(false);
        // navigate("/");
      }
    } catch (error) {
      return setError("Sign In Failed");
    }
  };
  
  return (
    <Card elevation={10} className="innerCard">
      <Box sx={{ padding: 5, width: 500 }}>
       
        <div className="bg-image">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              fontSize:"3rem",
              fontFamily: "Helvetica",
              marginBottom: "20px",
              color: "#08422D",
            }}
          >
            Sign in
          </Typography>
          <LoginInput
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => {
              setError(null)
              setEmail(e.target.value);
              setIsFilled(false);
            }}
            startDecorator={<Mail sx={{ color: "#08422D" }} />}
            placeholder="Enter Email Address"
            helperText="We'll use your email address for authentication"
            label="Email Address"
          />
          <LoginInput
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => {
              setError(null)
              setPassword(e.target.value);
              setIsFilled(false);
            }}
            startDecorator={<LockIcon sx={{ color: "#08422D" }} />}
            placeholder="Enter Password"
            label="Enter Password"
            required
          />
          <div
            style={{
              width: "100%",
              textAlign: "right",
              marginBottom: "5px",
            }}
          >

          </div>
          {error && (
            <Alert variant="solid" color="danger" sx={{ textAlign: "center" }}>
              {error}
            </Alert>
          )}
          <PrimaryButton
          disabled={password.length<6  || error}
            sx={{
              marginTop: "10px",
            }}
            size={"large"}
            onClick={handleSignin}
            // onKeyDown={handleKeyDown}
          >
            Sign in
          </PrimaryButton>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                borderBottom: "1px solid #08422Daa",
                width: "170px",
                height: "0px",
              }}
            ></div>
            <div style={{ color: "#08422D" }}>or</div>
            <div
              style={{
                borderBottom: "1px solid #08422Daa",
                width: "170px",
                height: "0px",
              }}
            ></div>
          </div> */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {/* <SocialButton
                size={"large"}
                onClick={handleGoogle}
                startIcon={<GoogleIcon />}
                sx={{ display: "flex", alignItems: "center" }}
              >
                Continue with Google
              </SocialButton> */}
            <DialogActions sx={{ alignSelf: "center" }}>
              <Typography
                variant="body2"
                color="#505050"
                style={{
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Not a member yet?{" "}
                <Button
                  // to=""
                  onClick={toggleProp}
                  style={{
                    color: "#08422D",
                    textDecoration: "underline",
                    fontSize: "15px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Sign up
                </Button>
              </Typography>
            </DialogActions>
          </div>
        </div>
      </Box>
    </Card>
  );
};

export default LoginForm;
