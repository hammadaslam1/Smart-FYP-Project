import { Box, Card, Typography,FormControl,InputLabel,Select,MenuItem } from "@mui/material";
import SignupInput from "../../components/inputs/SignupInput";
import SignupSelect from "../../components/inputs/SignupSelect";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const AnnounceDocumentDate = () => {
  const [announcementHeading,setAnnouncementHeading] = useState("Broadcast Announcement")
  const [announcementType,setAnnouncementType] = useState("")
  const [specificStudent,setSpecificStudent] = useState(false)
  const handleSelect = (e) => {
    setAnnouncementType(e.target.value);
    if(e.target.value === 'toone'){
      setSpecificStudent(true)
      setAnnouncementHeading("Send to Student")
    }else{
      setSpecificStudent(false)
    }
  }
  return (
    <Box sx={{ pt: 10 ,width:"100%"}}>
     <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin:3
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
          {
              specificStudent?<h1>Specific</h1>:<h1>BroadCast</h1>
            }
    </Box>
  );
};

export default AnnounceDocumentDate;
