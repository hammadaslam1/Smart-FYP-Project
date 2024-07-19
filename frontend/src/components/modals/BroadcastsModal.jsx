import * as React from "react";
import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DialogContent from "@mui/joy/DialogContent";
import { Box, IconButton, Typography,Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function BroadcastsModal() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const id = currentUser.id;
  const [broadcastsRead,setBroadcastsRead] = React.useState(null)
  const [broadcasts, setBroadcasts] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:3001/api/broadcast/getallbroadcasts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const reverseData = data.reverse();
        setBroadcasts(reverseData);
      });
      fetch(`http://localhost:3001/api/user/checkbroadcastsstatus/${id}`,{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response)=>response.json()).then((data) => {
          setBroadcastsRead(data);
          // setIsData(true);
      })
      
  }, []);
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <IconButton sx={{padding:0,marginRight:2}}  size="large" onClick={() => {
        fetch(`http://localhost:3001/api/user/markbroadcastsasread/${id}`,{method: "POST",}).then(()=>{
          setBroadcastsRead(prev=>true);
          setOpen(true)
        })
      }}>
        <Badge variant={broadcastsRead?"":"dot"} color="error" sx={{padding:0,}}>
          <NotificationsIcon htmlColor="#08422D" sx={{}} />
        </Badge>
      </IconButton>
      <Transition in={open} timeout={400}>
        {(state) => (
          <Modal
            keepMounted
            open={!["exited", "exiting"].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: "none",
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: "blur(8px)" },
                    entered: { opacity: 1, backdropFilter: "blur(8px)" },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === "exited" ? "hidden" : "visible",
            }}
          >
            <ModalDialog
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
                height: "80vh",
                width: "80vw",
              }}
            >
              <Typography
                variant="h3"
                color="#08422D"
                sx={{
                  borderBottom: "2px solid #08422D",
                }}
              >
                Broadcasts
              </Typography>
              <Box sx={{ overflow: "auto", padding: "5px" }}>
                {broadcasts.map((broadcast) => (
                  <Box
                    sx={{
                      borderBottom: "1px solid grey",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography variant="h5">{broadcast.message}</Typography>
                    <Typography variant="body2">
                      {broadcast.date.toLocaleString()}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </React.Fragment>
  );
}
