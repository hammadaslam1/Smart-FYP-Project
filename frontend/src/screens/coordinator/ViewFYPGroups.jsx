import { Box, Card, Typography, Tooltip, Chip, Slider,  } from "@mui/material";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import LinearProgressWithLabel from '../../components/progress/LinearProgressWithLabel'
import { useNavigate } from "react-router-dom";
const ViewFYPGroups = () => {
  const navigate = useNavigate();
  const [groups, setGroups] = useState([]);
  const [progress,setProgess] = useState(30);
  const getAllGroups = async () => {
    const response = await fetch("http://localhost:3001/api/groups/getgroups");
    const data = await response.json();
    setGroups(data);
  };
  useEffect(() => {
    getAllGroups();
  }, []);
  const elevate = () => {
    return 7;
  };
  return (
    <Box sx={{ mt: 10, p: 3 }}>
      <Typography variant="h2">All FYP Groups</Typography>
      <Card elevation={0}>filter card</Card>
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
            <Box onClick={()=>{navigate('/group-details',{
              state:data
            })}} sx={{ cursor: "pointer" }}>
              <Tooltip title= {data.idea.title===""?"Title Not Selected":data.idea.title} >
                <Card
                  elevation={0}
                  key={i}
                  sx={{
                    m: 2,
                    p: 3,
                    borderRadius: 4,
                    border: "2px solid #c4c4c4",
                    width: "400px",
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
                      justifyContent: "flex-start",
                      my: 1,
                    }}
                  >
                    <AvatarGroup max={3} min={2}>
                      {new Array(data.members.length).fill(1).map((j) => (
                        <Avatar />
                      ))}
                    </AvatarGroup>
                  </Box>
                  <Typography
                    variant="h5"
                    color={"#474747"}
                    fontWeight={600}
                    sx={{ maxHeight: 100, my: 1 }}
                    noWrap
                  >
                    {data.idea.title===""?"Title Not Selected":data.idea.title}
                  </Typography>
                  <Typography
                    variant="h6"
                    fontWeight={600}
                    color={"#808080"}
                    sx={{ my: 1 }}
                  >
                    {/* {data.members.join(", ")} */}
                    {
                      data.members.map((member)=>(
                        <Typography>{member.student_name + " | " + member.student_id}</Typography>
                      ))
                    }
                  </Typography>
                  {/* <Typography variant="body1">{data.members[0]}</Typography> */}
                  {/* <Typography variant="body1">{data.members.join(", ")}</Typography> */}
                  <Typography
                    variant="h5"
                    fontWeight={600}
                    color={"#585858"}
                    sx={{ my: 1 }}
                  >
                    <RecordVoiceOverIcon
                      sx={{ position: "relative", top: "3px", right: "4px" }}
                    />
                    {data.supervisor}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ display: "flex", justifyContent: "flex-end", my: 1 }}
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
                    <LinearProgressWithLabel color="success"  value={progress} />
                </Card>
              </Tooltip>
            </Box>
          ))}
      </Card>
    </Box>
  );
};

export default ViewFYPGroups;
