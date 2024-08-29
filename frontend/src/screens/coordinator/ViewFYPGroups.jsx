import {
  Box,
  Card,
  Typography,
  Tooltip,
  Chip,
  Slider,
  CircularProgress,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import LinearProgressWithLabel from "../../components/progress/LinearProgressWithLabel";
import { useNavigate } from "react-router-dom";
const ViewFYPGroups = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  console.log(url)
  const navigate = useNavigate();
  const [groupsHeading, setGroupsHeading] = useState("All FYP Groups");
  const [loading, setLoading] = useState(false);
  const [groups, setGroups] = useState([]);
  const [originalGroups, setOriginalGroups] = useState([]);
  const [filter, setFilter] = useState(null);
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
  const elevate = () => {
    return 7;
  };
  const handleFilterChange = async (event) => {
    const newFilter = event.target.value;
    setFilter(event.target.value);
    if (newFilter === "allgroups") {
      setGroups(originalGroups);
      setGroupsHeading("All FYP Groups");
    } else if (newFilter === "morning") {
      setGroups(originalGroups.filter((group) => group.shift === "morning"));
      setGroupsHeading("Morning Shift FYP Groups");
    } else if (newFilter === "evening") {
      setGroups(originalGroups.filter((group) => group.shift === "evening"));
      setGroupsHeading("Evening Shift FYP Groups");
    }
  };
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
        <Box sx={{ mt: 10, p: 3, width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h3">{groupsHeading}</Typography>
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
                  <MenuItem value={"allgroups"}>All Groups</MenuItem>
                  <MenuItem value={"morning"}>Morning Shift</MenuItem>
                  <MenuItem value={"evening"}>Evening Shift</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Card
            elevation={0}
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            {groups &&
              groups.map((data, i) => (
                <Box
                  onClick={() => {
                    navigate("/group-details", {
                      state: data,
                    });
                  }}
                  sx={{ cursor: "pointer" }}
                >
                  <Tooltip
                    title={
                      data.idea.title === ""
                        ? "Title Not Selected"
                        : data.idea.title
                    }
                  >
                    <Card
                      elevation={0}
                      key={i}
                      sx={{
                        m: 1,
                        p: 2,
                        borderRadius: 4,
                        border: "2px solid #c4c4c4",
                        width: "500px",
                        height:"200px",
                        "&:hover": {
                          boxShadow: "0 2px 15px 5px #b3b3b3",
                          border: "2px solid transparent",
                          // boxShadow: 10,
                        },
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          my: 1,
                        }}
                      >
                        <AvatarGroup max={3} min={2}>
                          {new Array(data.members.length).fill(1).map((j) => (
                            <Avatar />
                          ))}
                        </AvatarGroup>
                        <Typography
                          variant="body1"
                          sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            my: 1,
                          }}
                        >
                          <Chip
                            sx={{
                              backgroundColor: data.status ? "#0f0" : "#f00",
                              color: "#fff",
                              fontWeight: "600",
                            }}
                            label={data.status ? "Approved" : "Pending"}
                          />
                        </Typography>
                      </Box>
                      <Typography
                        variant="h5"
                        color={"#474747"}
                        fontWeight={600}
                        sx={{ maxHeight: 100, my: 1 }}
                        noWrap
                      >
                        {data.idea.title === ""
                          ? "Title Not Selected"
                          : data.idea.title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems:"center"
                        }}
                      >
                        <Typography
                          variant="h6"
                          fontWeight={600}
                          color={"#808080"}
                          sx={{ my: 1 }}
                        >
                          {/* {data.members.join(", ")} */}
                          {data.members.map((member) => (
                            <Typography>
                              {member.student_name + " | " + member.student_id}
                            </Typography>
                          ))}
                        </Typography>
                        <Box>
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
                            {data.supervisor}
                          </Typography>
                          <Typography variant="h6" color={"#808080"} sx={{position:"relative",right:"5px"}}>
                            Shift: {data.shift}
                          </Typography>
                        </Box>
                      </Box>

                      <LinearProgressWithLabel
                        color="success"
                        value={data.completion}
                      />
                    </Card>
                  </Tooltip>
                </Box>
              ))}
          </Card>
        </Box>
      )}
    </>
  );
};

export default ViewFYPGroups;
