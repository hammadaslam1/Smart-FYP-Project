import {
  Box,
  Card,
  Typography,
  Button,
  TextField,
  IconButton,
  ButtonGroup,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import editIcon from "../../components/assets/icons/editing-icon.png";
import { useEffect, useState } from "react";
import SignupInput from "../../components/inputs/SignupInput";
import { FiEdit } from "react-icons/fi";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const ManageGroupDetails = () => {
  const { state } = useLocation();
  const [supervisors,setSupervisors] = useState();
  const [group, setGroup] = useState(state);
  const [editTitleFlag, setEditTitleFlag] = useState(false);
  const [editDescFlag, setEditDescFlag] = useState(false);
  const [editSupervisorFlag, setEditSupervisorFlag] = useState(false);
  const [editClassFlag, setEditClassFlag] = useState(false);
  const [rerender, setRerender] = useState(0);
  const [newTitle, setNewTitle] = useState(group.idea.title);
  const [newDesc, setNewDesc] = useState(group.idea.description);
  const [newSupervisor, setNewSupervisor] = useState(group.supervisor);
  const [newClass, setNewClass] = useState(group.class);
  const handleTitleEdit = () => {
    fetch(`http://localhost:3001/api/groups/editgrouptitle/${group._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newTitle }),
    })
      .then((response) => {
        if (response.ok) {
          setEditTitleFlag(false);
          alert("title updated successfully");
          setRerender((prev) => prev + 1);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleDescEdit = () => {
    fetch(`http://localhost:3001/api/groups/editgroupdesc/${group._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description: newDesc }),
    })
      .then((response) => {
        if (response.ok) {
          setEditDescFlag(false);
          alert("description updated successfully");
          setRerender((prev) => prev + 1);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleSupervisorEdit = () => {
    fetch(`http://localhost:3001/api/groups/editgroupsupervisor/${group._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ supervisor: newSupervisor }),
    })
      .then((response) => {
        if (response.ok) {
          setEditSupervisorFlag(false);
          alert("Supervisor updated successfully");
          setRerender((prev) => prev + 1);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  const handleClassEdit = () => {
    fetch(`http://localhost:3001/api/groups/editgroupclass/${group._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newClass: newClass }),
    })
      .then((response) => {
        if (response.ok) {
          setEditClassFlag(false);
          alert("Class updated successfully");
          setRerender((prev) => prev + 1);
        }
      })
      .catch((error) => {
        alert(error);
      });
  };
  const fetchSupervisors = async () => {
    try {
      await fetch("http://localhost:3001/api/supervisor/getAllSupervisors")
        .then((response) => response.json())
        .then((responseData) => {
          const supervisorNames = responseData.map(
            (supervisor) => supervisor.supervisor_name
          );
          setSupervisors(supervisorNames);
          console.log(supervisorNames);
        })
        .catch((error) => alert(error));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSupervisors();
    fetch(`http://localhost:3001/api/groups/getgroup/${group._id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setGroup(data);
      });
  }, [rerender]);
  return (
    <Card
      sx={{
        m: 3,
        mt: 13,
        p: 3,
        width: "100%",
        border: "3px solid #08422D",
        borderRadius: "20px",
      }}
      elevation={5}
    >
      <Typography
        variant="h4"
        sx={{
          borderBottom: "1px solid grey",
          color: "#08422D",
          fontWeight: "700",
        }}
      >
        Manage Group Details
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid grey",
            alignItems: "center",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <Box>
            {editTitleFlag ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <SignupInput
                  sx={{ width: "400px" }}
                  placeholder={"Edit Title"}
                  color="success"
                  value={newTitle}
                  onChange={(e) => {
                    setNewTitle(e.target.value);
                  }}
                />
                <PrimaryButton
                  sx={{ marginLeft: "10px", height: "40px", width: "100px" }}
                  text="Save"
                  variant="contained"
                  color="success"
                  onClick={handleTitleEdit}
                >
                  Save
                </PrimaryButton>
              </Box>
            ) : (
              <Typography
                sx={{
                  fontWeight: 700,
                }}
                variant="h5"
              >
                Title: {group.idea.title}{" "}
              </Typography>
            )}
          </Box>

          <IconButton
            onClick={() => {
              setEditTitleFlag(true);
            }}
          >
            <FiEdit color="#08422D" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid grey",
            alignItems: "center",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <Box>
            {editDescFlag ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <TextField
                  multiline
                  minRows={3}
                  width="700px"
                  name="description"
                  sx={{
                    width: "700px",
                  }}
                  value={newDesc}
                  fullWidth
                  onChange={(e) => {
                    setNewDesc(e.target.value);
                    console.log(newDesc);
                  }}
                ></TextField>

                <PrimaryButton
                  sx={{ height: "40px", width: "100px", mx: 2 }}
                  text="Save"
                  variant="contained"
                  color="success"
                  onClick={handleDescEdit}
                >
                  Save
                </PrimaryButton>
              </Box>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  wordWrap: "break-word",
                }}
              >
                <strong>Description: </strong>
                {group.idea.description}{" "}
              </Typography>
            )}
          </Box>

          <IconButton
            onClick={() => {
              setEditDescFlag(true);
            }}
          >
            <FiEdit color="#08422D" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid grey",
            alignItems: "center",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <Box>
            {editSupervisorFlag ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <FormControl sx={{ my: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label" color="success">
            Choose Supervisor
          </InputLabel>
          {supervisors && (
            <Select
              color="success"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Docuement Type*"
              onChange={(e) => {
                setNewSupervisor(e.target.value);
              }}
              sx={{width:"400px"}}
            >
              {supervisors.map((supervisor) => (
                <MenuItem value={supervisor}>{supervisor}</MenuItem>
              ))}
            </Select>
          )}
        </FormControl>
                <PrimaryButton
                  sx={{ height: "40px", width: "100px", mx: 2 }}
                  text="Save"
                  variant="contained"
                  color="success"
                  onClick={handleSupervisorEdit}
                >
                  Save
                </PrimaryButton>
              </Box>
            ) : (
              <Typography
                variant="body1"
                sx={{
                  wordWrap: "break-word",
                }}
              >
                <strong>Supervisor: </strong>
                {group.supervisor}
              </Typography>
            )}
          </Box>

          <IconButton
            onClick={() => {
              setEditSupervisorFlag(true);
            }}
          >
            <FiEdit color="#08422D" />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderBottom: "1px solid grey",
            alignItems: "center",
            paddingBottom: "10px",
            paddingTop: "10px",
          }}
        >
          <Box>
            {editClassFlag ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <SignupInput
                  sx={{ width: "400px" }}
                  placeholder={"Edit Title"}
                  color="success"
                  value={newClass}
                  onChange={(e) => {
                    setNewClass(e.target.value);
                  }}
                />
                <PrimaryButton
                  sx={{ marginLeft: "10px", height: "40px", width: "100px" }}
                  text="Save"
                  variant="contained"
                  color="success"
                  onClick={handleClassEdit}
                >
                  Save
                </PrimaryButton>
              </Box>
            ) : (
              <Typography
                variant="body"
              >
                <strong>Class: </strong>{group.class}
              </Typography>
            )}
          </Box>

          <IconButton
            onClick={() => {
              setEditClassFlag(true);
            }}
          >
            <FiEdit color="#08422D" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
};

export default ManageGroupDetails;
