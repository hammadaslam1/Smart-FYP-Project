import {
  Box,
  Card,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import SignupInput from "../../components/inputs/SignupInput";
import SignupSelect from "../../components/inputs/SignupSelect";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const AnnounceDocumentDate = () => {
  const [message, setMessage] = useState("");
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
      body: JSON.stringify({message:message}),
    }).then((response) => {
      if(response.ok)
        {
          alert("broadcast sent successfully")
          setMessage("");
        }
        else{
          alert("Error sending broadcast")
        }
    }).catch((error) => {
        alert(error.message)
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
        <h1>Specific</h1>
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
