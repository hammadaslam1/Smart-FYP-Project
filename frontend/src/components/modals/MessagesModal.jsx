import * as React from "react";
import { Transition } from "react-transition-group";
import Button from "@mui/joy/Button";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DialogContent from "@mui/joy/DialogContent";
import { Box, IconButton, Typography, Badge } from "@mui/material";
import { useSelector } from "react-redux";
import MessageIcon from "@mui/icons-material/Message";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function MessagesModal() {
  const [messagesRead, setMessagesRead] = React.useState(null);
  const currentUser = useSelector((state) => state.user.currentUser);
  const id = currentUser.id;
  const [messages, setMessages] = React.useState([]);
  React.useEffect(() => {
    fetch(
      `http://localhost:3001/api/student/getstudentmessages/${currentUser.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then(async (data) => {
        const reverseData = data.reverse();
        const filteredData = await reverseData.filter(
          (item) =>
            item !== null &&
            Object.values(item).every((value) => value !== null)
        );
        setMessages(filteredData);
      });
    fetch(`http://localhost:3001/api/user/checkmessagesstatus/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setMessagesRead(data);
      });
  }, []);
  const [open, setOpen] = React.useState(false);
  const messagesStyle = {
    success: {
      backgroundColor: "#39f60f9b",
      color: "black",
      fontWeight: "bold",
    },
    warning: {
      backgroundColor: "#e1ff00d0",
      color: "black",
    },
    info: {
      backgroundColor: "#B9D6F2",
      color: "black",
    },
    error: {
      backgroundColor: "#ff0000be",
      color: "black",
    },
  };
  return (
    <React.Fragment>
      <IconButton
        size="large"
        sx={{ p: 0 }}
        onClick={() => {
          fetch(`http://localhost:3001/api/user/markmessagesasread/${id}`, {
            method: "POST",
          }).then(() => {
            setMessagesRead(true);
            setOpen(true);
          });
        }}
      >
        <Badge variant={messagesRead ? "" : "dot"} color="error" sx={{}}>
          <MessageIcon htmlColor="#08422D" sx={{}} />
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
                Messages
              </Typography>
              <Box sx={{ overflow: "auto", padding: "5px" }}>
                {messages.map((message) => (
                  <Box
                    sx={{
                      borderBottom: "1px solid grey",
                      padding: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      ...messagesStyle[`${message.type}`],
                    }}
                  >
                    <Typography variant="h5">
                      Message: {message.text}
                    </Typography>
                    <Box>
                      <Typography variant="body2">
                        Sent By: {message.sender}
                      </Typography>
                      <Typography variant="body2" sx={{width:"200px"}}>
                        Date:{" "}
                        {formatDistanceToNow(message.date, {
                          addSuffix: true,
                        })}
                      </Typography>
                    </Box>
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
