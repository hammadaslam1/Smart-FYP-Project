/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {
  Backdrop,
  // Alert,
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

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SignupModal = ({
  openLogin,
  openSignup,
  setOpenSignup,
  setOpenLogin,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const handleBack = () => {
    setOpenSignup(false);
    setOpenLogin(true);
  };
  const handleClose = () => {
    setOpenSignup(false);
    setOpenLogin(false);
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
      const url = process.env.REACT_APP_BACKEND_URL;
      const res = await fetch(`${url}/api/auth/signup`, {
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

  const backStyle = {
    borderRadius: "20px",
  };
  return (
    <Dialog
      open={openSignup}
      TransitionComponent={Transition}
      keepMounted={true}
      onClose={handleClose}
      scroll="body"
      PaperProps={{ sx: backStyle }}
      onKeyDown={handleKeyDown}
    >
      <Backdrop
        sx={{ color: "#08422D", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
        // onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ padding: 5, width: 500 }}>
        <IconButton
          sx={{
            width: "fit-content",
            position: "absolute",
            top: 10,
            right: 10,
          }}
          onClick={handleClose}
        >
          <CloseIcon sx={{ textAlign: "right" }} />
          {/* Close */}
        </IconButton>
        <div className="bg-image">
          <IconButton
            sx={{
              width: "fit-content",
              position: "absolute",
              top: 35,
              left: 20,
            }}
            onClick={handleBack}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "700",
              textAlign: "center",
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
              dispatch(removeError());
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
              dispatch(removeError());
              setEmail(e.target.value);
            }}
            placeholder="Enter Email Address"
            label="Email Address"
            helperText="We'll use your email address for registration"
            required
            startDecorator={<Mail sx={{ color: "#08422D" }} />}
          />
          <SignupInput
            type={showPassword ? "text" : "password"}
            variant="outlined"
            value={password}
            name="password"
            onChange={(e) => {
              dispatch(removeError());
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
              dispatch(removeError());
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
          <SignupSelect
            value={role}
            label="Role"
            placeholder="Select a Role"
            onChange={(e) => setRole(e.target.value)}
            startDecorator={<CategoryIcon sx={{ color: "#08422D" }} />}
          />
          {error && (
            <Alert variant="solid" color="danger" sx={{ textAlign: "center" }}>
              {error}
            </Alert>
          )}
          <PrimaryButton
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
                  onClick={() => {
                    setOpenSignup(false);
                    setOpenLogin(true);
                  }}
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
    </Dialog>
  );
};

export default SignupModal;
