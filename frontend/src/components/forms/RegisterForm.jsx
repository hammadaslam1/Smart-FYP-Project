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
  InputAdornment,
  Slide,
  Typography,
} from "@mui/material";
import Alert from "@mui/joy/Alert";
import { forwardRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LockIcon from "@mui/icons-material/Lock";
import { Mail, Visibility, VisibilityOff } from "@mui/icons-material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonIcon from "@mui/icons-material/Person";
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   updateProfile,
// } from "../../firebase/firebase.js";
// import { auth } from "../../firebase/firebase";
import GoogleIcon from "@mui/icons-material/Google";
import CallIcon from "@mui/icons-material/Call";
import SignupInput from "../inputs/SignupInput.jsx";
// import './dialog.css'
import PrimaryButton from "../buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import {
  removeError,
  signinFailure,
  signinStart,
  signinSuccess,
} from "../../redux/userReducer/userSlice.jsx";
import SignupSelect from "../inputs/SignupSelect.jsx";
const RegisterForm = ({toggleProp}) => {
  const [name, setName] = useState("");
  const [id,setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [error,setError] = useState(null);
  const handleBack = () => {
    // setOpenSignup(false);
    // setOpenLogin(true);
  };
  const handleClose = () => {
    // setOpenSignup(false);
    // setOpenLogin(false);
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleRegister();
    }
  };

  const handleGoogle = () => {
    // setIsPressed(true);
    // const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider)
    //   .then((result) => {
    //     const credential = GoogleAuthProvider.credentialFromResult(result);
    //     const token = credential.accessToken;
    //     const user = result.user;
    //     setIsPressed(false);
    //     setOpenSignup(false);
    //   })
    //   .catch((e) => {
    //     setIsPressed(false);
    //     // alert(e.code, e.message);
    //   });
  };
  const handleToggle = (e) => {
    console.log(e);
    if (e == "P") {
      setShowPassword(!showPassword);
      console.log(showPassword);
    } else if (e == "CP") {
      setShowCPassword(!showCPassword);
      console.log(showCPassword);
    }
  };
  const handleRegister = async () => {
    try {
      dispatch(signinStart());
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@ue\.edu\.pk$/i
;
      // setOpen(true);

      if (
        password == "" ||
        email == "" ||
        name == "" ||
        confirmPassword == ""
      ) {
        return setError("Enter all fields");
      } else if (password != confirmPassword) {
        return setError("Passwords do not match");
      }
      if (!emailRegex.test(email)) {
        return setError("Email must end with @ue.edu.pk");
      }
      fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      }).then((response)=>{console.log(response)
        if(response.ok){
        toggleProp()
      }else{return response.json()}}).then((data)=>setError(data.message)).catch((error)=>setError(error.message))
    } catch (error) {
      return setError("Sign Up Failed");
    }
  };

  const backStyle = {
    borderRadius: "20px",
  };

  return (
    <Card elevation={10} className="registerMain" >
      <Box sx={{ padding: 5, width: 500 }} >
       
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
            Sign up
          </Typography>
          <SignupInput
            type="text"
            variant="outlined"
            value={name}
            onChange={(e) => {
              setError(null);
              setName(e.target.value);
            }}
            label="Full Name"
            placeholder="Enter Your Full Name"
            required
            startDecorator={<PersonIcon sx={{ color: "#08422D" }} />}
          />
          <SignupInput
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => {
              setError(null);
              setEmail(e.target.value);
            }}
            placeholder="Enter Email Address"
            label="Email Address"
            helperText="Enter your university email address for registration i.e bsf2104040@ue.edu.pk"
            required
            startDecorator={<Mail sx={{ color: "#08422D" }} />}
          />
          <SignupInput
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            name="password"
            onChange={(e) => {
              setError(null);
              setPassword(e.target.value);
            }}
            endDecorator={
              <IconButton
                onClick={() => handleToggle("P")}
                sx={{ color: "#08422D", p: 0, mx: 1 }}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            placeholder="Enter Password"
            label="Password"
            required
            startDecorator={<LockIcon sx={{ color: "#08422D" }} />}
          />
          <SignupInput
            type={showCPassword ? "text" : "password"}
            variant="outlined"
            value={confirmPassword}
            name="confirmPassword"
            onChange={(e) => {
              setError(null);
              setConfirmPassword(e.target.value);
            }}
            endDecorator={
              <IconButton
                onClick={() => handleToggle("CP")}
                sx={{ color: "#08422D", p: 0, mx: 1 }}
                edge="end"
              >
                {showCPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
            placeholder="Enter Password"
            label="Confirm Password"
            required
            startDecorator={<LockIcon sx={{ color: "#08422D" }} />}
          />
          {error && (
            <Alert variant="solid" color="danger" sx={{ textAlign: "center" }}>
              {error}
            </Alert>
          )}
          <PrimaryButton
          disabled={error}
            sx={{
              marginTop: "10px",
            }}
            size={"medium"}
            onClick={handleRegister}
          >
            Sign up
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
            >
              Continue with Google
            </SocialButton> */}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
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
                <Typography variant="body2">Already a member?</Typography>{" "}
                <Button
                  onClick={toggleProp}
                  style={{
                    color: "#08422D",
                    textDecoration: "underline",
                    fontSize: "15px",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  Sign in
                </Button>
              </Typography>
            </DialogActions>
          </div>
        </div>
      </Box>
    </Card>
  );
};

export default RegisterForm;
