import {
  Box,
  Card,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Autocomplete,
} from "@mui/material";
import SignupInput from "../../components/inputs/SignupInput";
import SignupSelect from "../../components/inputs/SignupSelect";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useState, useEffect } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useSelector } from "react-redux";

const AnnounceDocumentDate = () => {
  const sender = useSelector((state) => state.user.currentUser._id);

  const [message, setMessage] = useState("");
  const [students, setStudents] = useState("");
  const [messageType, setMessageType] = useState("");
  const [messageReceivers, setMessageReceivers] = useState([]);
  const [announcementHeading, setAnnouncementHeading] = useState(
    "Broadcast Announcement"
  );
  const [announcementType, setAnnouncementType] = useState("");
  const [specificStudent, setSpecificStudent] = useState(false);
  const handleSelect = (e) => {
    setAnnouncementType(e.target.value);
    if (e.target.value === "toone") {
      setSpecificStudent(true);
      setAnnouncementHeading("Send to Student");
    } else {
      setSpecificStudent(false);
    }
  };
  const handleSendBroadcast = () => {
    fetch("http://localhost:3001/api/broadcast/insertbroadcast", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: message }),
    })
      .then((response) => {
        if (response.ok) {
          alert("broadcast sent successfully");
          setMessage("");
        } else {
          alert("Error sending broadcast");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  useEffect(() => {
    fetch(`http://localhost:3001/api/student/`)
      .then((response) => response.json())
      .then((data) => {
        const studentInfo = data
          .filter((student) => student.group.status)
          .map((student) => `${student.student_name} | ${student.student_id}`);
        setStudents(studentInfo);
      });
  }, []);
  const handleSendMessage = () => {
    console.log(messageReceivers)
    fetch("http://localhost:3001/api/student/sendmessage/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        members: messageReceivers,
        sender: sender,
        type: messageType,
      }),
    }).then((response) => {
      if (response.ok) {
        alert("Message sent successfully");
        setMessage("");
      } else {
        alert("Error sending message");
      }
    });
  };
  return (
    <Box sx={{ pt: 10, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 3,
        }}
      >
        <Typography variant="h3">{announcementHeading}</Typography>
        <Box>
          <FormControl fullWidth>
            <InputLabel
              color="success"
              id="demo-simple-select-label"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <FilterAltIcon /> Type
            </InputLabel>
            <Select
              sx={{ width: "300px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={announcementType}
              label="filtering.."
              color="success"
              onChange={handleSelect}
            >
              <MenuItem value={"all"}>Broadcast</MenuItem>
              <MenuItem value={"toone"}>Specific Student</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      {specificStudent ? (
        <Box>
          <Box>
            <Typography>Select Student(s)</Typography>
            <Autocomplete
              disabled={!students}
              color="success"
              sx={{ my: 1 }}
              multiple
              value={messageReceivers}
              placeholder="Students"
              options={students ? students : ["select class"]}
              onChange={(e, value) => {
                setMessageReceivers(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Members"
                  placeholder="Members"
                />
              )}
            />
            <Typography>Select Message Type</Typography>
            <Select
              sx={{ width: "300px" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={messageType}
              label="filtering.."
              color="success"
              onChange={(e) => {
                setMessageType(e.target.value);
              }}
            >
              <MenuItem value={"warning"}>Warning</MenuItem>
              <MenuItem value={"successs"}>Acknowledgement</MenuItem>
              <MenuItem value={"info"}>Information</MenuItem>
              <MenuItem value={"error"}>Deadline</MenuItem>
            </Select>
            <Typography variant="h5">Write Message</Typography>
            <TextField
              multiline
              disabled={messageType ? false : true}
              minRows={3}
              sx={{ mx: 2 }}
              name="previousTask"
              fullWidth
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></TextField>
            <PrimaryButton sx={{ width: "200px" }} onClick={handleSendMessage}>
              Send Message
            </PrimaryButton>
          </Box>
        </Box>
      ) : (
        <Box sx={{ width: "500px" }}>
          <TextField
            multiline
            minRows={3}
            sx={{ mx: 2 }}
            name="previousTask"
            fullWidth
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></TextField>
          <PrimaryButton sx={{ width: "200px" }} onClick={handleSendBroadcast}>
            Send Broadcast
          </PrimaryButton>
        </Box>
      )}
    </Box>
  );
};

export default AnnounceDocumentDate;
