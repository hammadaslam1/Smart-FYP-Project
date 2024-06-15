import {
  Avatar,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import React, { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PrimaryButton from "../buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import LOGO from "../assets/logos/uelogo.png";
import LoginModal from "../modals/LoginModal";
import SignupModal from "../modals/SignupModal";
import { useNavigate } from "react-router-dom";
import avatarImage from "../assets/avatars/user-avatar-happy.svg";
import { signoutSuccess } from "../../redux/userReducer/userSlice";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: "hidden",
  // alignItems: 'center',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  backgroundColor: "#08422D",
  color: "#fff",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(0, 1),
  position: "sticky",
  top: 0,
  zIndex: 1,
  ...theme.mixins.toolbar,
}));
let footer = true;
const DrawerFooter = styled("div")(({ theme }) => ({
  backgroundColor: footer ? "#D8A900" : "#08422D",
  color: "#fff",
  height: "80px",
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  position: "sticky",
  bottom: 0,
  zIndex: 1,
  ...theme.mixins.toolbar,
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  height: "80px",
  backgroundColor: "#D8A900",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  minHeight: "100vh",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Appbar = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState();
  const currentUser = useSelector((state) => state.user.currentUser);
  if (currentUser) {
    const myUser = currentUser;
  }
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const navigate = useNavigate();
  const links = useSelector((state) => state.links);
  const linkArray = links.links;
  console.log(linkArray.length);
  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    if (currentUser) {
      // auth.currentUser.displayName = 'hammad'
      setUser("logout");
      setOpenLogin(false);
    } else {
      // navigate(PRODUCTS);
      setUser("login");
      setOpenLogin(true);
    }
    // });
  }, [currentUser]);

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar sx={style.toolbar}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {!open && (
              <IconButton
                sx={{position:"relative",right:"13px"}}
                size="large"
                onClick={() => {
                  setOpen(!open);
                  footer = open;
                }}
              >
                <MenuIcon htmlColor="#fff" />
              </IconButton>
            )}
            <IconButton
              size="large"
              onClick={() => {
                setOpen(!open);
                footer = open;
              }}
              sx={{ padding: 0 }}
            >
              <img src={LOGO} height={50} alt="" srcset="" />
            </IconButton>
            {/* <div>
              <img src={"NAME_SLOGAN"} height={35} alt="" srcset="" />
            </div> */}
            <Typography
              variant="h5"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              FYPMS
            </Typography>
          </div>
          <div
            style={{
              alignSelf: "right",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            {/* <Typography>{currentUser && currentUser.username}</Typography> */}
            <PrimaryButton
              sx={{
                minWidth: "100px",
                alignSelf: "right",
                fontSize: 20,
                fontWeight: "normal",
              }}
              children={user}
              onClick={() => {
                if (currentUser) {
                  // signOut(auth);
                  fetch("http://localhost:3001/api/auth/signout", {
                    method: "POST", // or "GET", "PUT", etc. depending on your server's requirements
                    credentials: "include", // if you need to send cookies or authentication headers
                  })
                    .then((response) => {
                      if (response.ok) {
                        dispatch(signoutSuccess());
                        console.log("ok ok ok");
                      } else {
                        // handle sign-out error
                      }
                    })
                    .catch((error) => {
                      // handle fetch error
                    });
                } else {
                  setOpenLogin(true);
                }
              }}
            />
          </div>
        </Toolbar>
        {!currentUser && openLogin ? (
          <LoginModal
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
            openSignup={openSignup}
            setOpenSignup={setOpenSignup}
          />
        ) : (
          ""
        )}
        {!currentUser && openSignup ? (
          <SignupModal
            openSignup={openSignup}
            setOpenSignup={setOpenSignup}
            openLogin={openLogin}
            setOpenLogin={setOpenLogin}
          />
        ) : (
          ""
        )}
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        // onClose={() => handleDrawerClose()}
      >
        <DrawerHeader>
          <Typography variant="h5" sx={{ marginX: 3, fontWeight: 600 }}>
            Menu
          </Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon fontSize="large" htmlColor="#fff" />
            ) : (
              <ChevronLeftIcon fontSize="large" htmlColor="#fff" />
            )}
          </IconButton>
        </DrawerHeader>
        {/* {linkArray.map((link, i) => (
          <div
            key={i}
            onClick={() => setOpen(true)}
            style={{ cursor: "pointer" }}
          >
            <Typography
              component={"div"}
              sx={{
                px: 3,
                py: 2,
                color: "#fff",
                backgroundColor: "#D8A900",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              {link.name}
            </Typography> */}
        <List>
          {linkArray.map(
            (link, index) =>
              // data.category == cat &&
              link.flag && (
                <ListItem disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={() => navigate(link.to)}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      <link.icon sx={{ color: "#08422D" }} />
                    </ListItemIcon>
                    {/* <Typography>{link.name}</Typography> */}
                    <ListItemText
                      primary={open && link.name}
                      sx={{ fontSize: "10pt" }}
                    />
                  </ListItemButton>
                </ListItem>
              )
              // <Typography>{index}</Typography>
          )}
        </List>
        {/* </div>
        ))} */}
        <DrawerFooter /*</Drawer>sx={{position:"absolute",width:"100%"}}*/>
          <IconButton size="large" onClick={() => setOpen(!open)}>
            <Avatar sx={{ marginLeft: "-10px" }} src={avatarImage} />
          </IconButton>
          <div>
            {currentUser && (
              <Typography variant="h6" sx={{ marginX: 3, fontWeight: 500 }}>
                {currentUser.name}
                {/* Footer */}
              </Typography>
            )}
          </div>
        </DrawerFooter>
      </Drawer>
    </>
  );
};

const style = {
  appbar: {
    backgroundColor: "#6a6a6a",
    height: "50px",
    position: "fixed",
  },
  toolbar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    // width: "100%",
  },
};

export default Appbar;
