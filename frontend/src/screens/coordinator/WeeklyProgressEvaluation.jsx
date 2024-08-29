/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  styled,
  tableCellClasses,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { useNavigate } from "react-router-dom";

const WeeklyProgressEvaluation = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState(null);
  const [heading, setHeading] = useState("All Groups");
  const [groups, setGroups] = useState(null);
  const [originalGroups, setOriginalGroups] = useState(null);
  const handleFilterChange = (event) => {
    switch (event.target.value) {
      case "All Groups":
        setHeading("All Groups");
        setGroups(originalGroups);
        break;
      case "Morning Groups":
        setGroups(originalGroups.filter((group) => group.shift === "morning"));
        setHeading("Morning Groups");
        break;
      case "Evening Groups":
        setHeading("Evening Groups");
        setGroups(originalGroups.filter((group) => group.shift === "evening"));
        break;
      default:
        setHeading("All Groups");
        setGroups(originalGroups);
        break;
    }
    setFilter(event.target.value);
  };
  
  const getAllGroups = async () => {
    setLoading(true);
    const response = await fetch(`${url}/api/groups/getgroups`);
    const data = await response.json().then(setLoading(false));
    setOriginalGroups(data);
    setGroups(data);
  };
  useEffect(() => {
    getAllGroups();
  }, []);
  return (
    <>
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          width="100%"
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box sx={{ width: "100%", px: 2 }}>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                mt: 11,
                justifyContent: "space-between",
                alignItems: "center",
                px: 2,
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#08422D", fontWeight: 600 }}
              >
                Select Group For Evaluation
              </Typography>
              <Box>
                <FormControl fullWidth>
                  <InputLabel
                    color="success"
                    id="demo-simple-select-label"
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <FilterAltIcon /> Filter
                  </InputLabel>
                  <Select
                    sx={{ width: "150px" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filter}
                    label="filtering.."
                    color="success"
                    onChange={handleFilterChange}
                  >
                    <MenuItem value={"All Groups"}>All Groups</MenuItem>
                    <MenuItem value={"Morning Groups"}>Morning Groups</MenuItem>
                    <MenuItem value={"Evening Groups"}>Evening Groups</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Typography
            variant="h4"
            sx={{ color: "#08422D", fontWeight: 600, px: 2 }}
          >
            {heading}
          </Typography>
          <Box sx={{ px: 2 }} >
            {groups && groups.map((group, i) => (
              <Card sx={{my:1,p:2,display:"flex",justifyContent:"space-between",borderRadius: 2,
                border: "2px solid #c4c4c4",
                "&:hover": {
                  boxShadow: "0 2px 15px 5px #b3b3b3",
                  border: "2px solid transparent",
                  // boxShadow: 10,
                },}} elevation={2} onClick={() => {
                  navigate("/evaluate-group-progress", {
                    state: group,
                  });
                }}>
                <Box>
                <Typography sx={{fontSize:"2rem"}}>{group.idea.title === ""
                          ? "Title Not Selected"
                          : group.idea.title}</Typography>
                <Typography
                          variant="h6"
                          fontWeight={600}
                          color={"#808080"}
                          sx={{ my: 1 }}
                        >
                          {/* {data.members.join(", ")} */}
                          {group.members.map((member) => (
                            <Typography>
                              {member.student_name + " | " + member.student_id}
                            </Typography>
                          ))}
                        </Typography>
                        </Box>
                        <Box sx={{display:"flex",flexDirection:"column",gap:1,minWidth:"250px"}}>
                        <Typography
                            variant="body1"
                            fontWeight={600}
                            color={"#585858"}
                          >
                            <RecordVoiceOverIcon
                              sx={{
                                position: "relative",
                                top: "5px",
                                right: "4px",
                              }}
                            />
                            {group.supervisor}
                          </Typography>
                <Typography>{group.class}</Typography>
                <Typography>Shift: {group.shift}</Typography>
                
                          </Box>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </>
  );
};

export default WeeklyProgressEvaluation;
