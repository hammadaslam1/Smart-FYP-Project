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

const Announcements = () => {
  const sender = useSelector((state) => state.user.currentUser.name);

  const [message, setMessage] = useState("");
  const [students, setStudents] = useState("");
  const [groups, setGroups] = useState("");
  const [selectedGroups, setSelectedGroups] = useState([]);
  const [messageType, setMessageType] = useState("");
  const [messageReceivers, setMessageReceivers] = useState([]);
  const [announcementHeading, setAnnouncementHeading] = useState(
    "Broadcast Announcement"
  );
  const [announcementType, setAnnouncementType] = useState("");
  const handleSelect = (e) => {
    setAnnouncementType(e.target.value);
    setComponentType(e.target.value);
    let tempComponentType = e.target.value;
    switch (tempComponentType) {
      case "Broadcast":
        setAnnouncementHeading("Broadcast Announcement");
        break;
      case "Specific":
        setAnnouncementHeading("Message Specific Student(s)");
        break;
      case "Group":
        setAnnouncementHeading("Group Announcement");
        break;
      default:
        setMessageReceivers([]);
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
          // .filter((student) => student.group.status)
          .map((student) => `${student.student_name} | ${student.student_id}`);
        setStudents(studentInfo);
      });
    fetch(`http://localhost:3001/api/groups/getgroups`)
      .then((response) => response.json())
      .then((data) => {
        const groupInfo = data.map((group) =>
          group.members.map((member) => member.student_name)
        );
        setGroups(data);
        console.log(data);
      });
  }, []);
  const handleSendMessage = () => {
    console.log(messageReceivers);
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
  const handleGroupMessage = () => {
    fetch("http://localhost:3001/api/groups/sendgroupmessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: message,
        groups: selectedGroups,
        sender: sender,
        type: messageType,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Group message sent successfully");
          setMessage("");
        } else {
          alert("Error sending group message");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  let component = null;
  const [componentType, setComponentType] = useState("Broadcast");
  switch (componentType) {
    case "Broadcast":
      component = (
        <Box sx={{ width: "600px", padding: "10px 30px" }}>
          <Typography variant="body1">
            Write Broadcast Message - [This message will be sent to all users]
          </Typography>
          <TextField
            multiline
            minRows={3}
            sx={{ marginTop: "5px" }}
            name="previousTask"
            fullWidth
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></TextField>
          <PrimaryButton
            sx={{ width: "200px", marginTop: "10px" }}
            onClick={handleSendBroadcast}
          >
            Send Broadcast
          </PrimaryButton>
        </Box>
      );
      break;
    case "Specific":
      component = (
        <Box sx={{ width: "600px", padding: "10px 30px" }}>
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
            sx={{ width: "100%" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={messageType}
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
          <Typography sx={{ my: 1 }} variant="body1">
            Write Message - [This message will only be sent to selected
            student(s)]
          </Typography>
          <TextField
            multiline
            disabled={messageType ? false : true}
            minRows={3}
            sx={{ width: "100%" }}
            name="previousTask"
            fullWidth
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></TextField>
          <PrimaryButton
            sx={{ my: 1, width: "200px" }}
            onClick={handleSendMessage}
          >
            Send Message
          </PrimaryButton>
        </Box>
      );
      break;
    case "Group":
      component = (
        <Box sx={{ width: "600px", padding: "10px 30px" }}>
          <Typography>Select Groups</Typography>
          <Select
            sx={{ width: "100%" }}
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="FYP Groups"
            onChange={(e) => {
              const tempArray = selectedGroups;
              tempArray.push(e.target.value);
              setSelectedGroups(tempArray);
              console.log(selectedGroups);
            }}
          >
            {groups.map((group) => (
              <MenuItem value={group._id}>
                <Typography>
                  <b>Team Lead: </b>
                  {group.teamLead}
                  <br />
                  <b>Title: </b>
                  {group.idea.title}
                </Typography>
              </MenuItem>
            ))}
          </Select>
          <Typography>Select Message Type</Typography>
          <Select
            sx={{ width: "100%" }}
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
          <Typography sx={{marginTop:"5px"}} variant="body1">Write Message - [This message will be send to the members of selected group(s)]</Typography>
          <TextField
            multiline
            minRows={3}
            sx={{ my: 1 }}
            name="Message"
            fullWidth
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></TextField>

          <PrimaryButton
            sx={{ width: "200px", my: 1 }}
            onClick={handleGroupMessage}
          >
            Send Message
          </PrimaryButton>
        </Box>
      );
      break;
    default:
      break;
  }

  return (
    <>
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
                <MenuItem value={"Broadcast"}>Broadcast</MenuItem>
                <MenuItem value={"Specific"}>Specific Student</MenuItem>
                <MenuItem value={"Group"}>Group Announcement</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>{component}</Box>
      </Box>
    </>
  );
};

export default Announcements;
