import { Box, Card, Typography, Button, TextField } from "@mui/material";
import { useLocation } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import editIcon from "../../components/assets/icons/editing-icon.png";
import { useEffect, useState } from "react";
import SignupInput from "../../components/inputs/SignupInput";

const ManageGroupDetails = () => {
  const { state } = useLocation();
  const [group, setGroup] = useState(state);
  const [editTitleFlag, setEditTitleFlag] = useState(false);
  const [editDescFlag, setEditDescFlag] = useState(false);
  const [rerender, setRerender] = useState(0);
  const [newTitle, setNewTitle] = useState(group.idea.title);
  const [newDesc, setNewDesc] = useState(group.idea.description);
  
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
  useEffect(() => {
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

          <Button>
            <img
              src={editIcon}
              alt=""
              height="30px"
              width="30px"
              onClick={() => {
                setEditTitleFlag(true);
              }}
            />
          </Button>
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
              <Box sx={{
                display: "flex",
                flexDirection: "column",  
              }} >
                <TextField
                  multiline
                  minRows={3}
                  width="700px"
                  name="description"
                  sx={{
                    width:"700px"
                  }}
                  value={newDesc}
                  fullWidth
                  onChange={(e) => {
                    setNewDesc(e.target.value);
                    console.log(newDesc)
                  }}
                ></TextField>

                <PrimaryButton
                  sx={{ height: "40px", width: "100px" }}
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
                <strong>Description:</strong>
                {group.idea.description}{" "}
              </Typography>
            )}
          </Box>

          <Button>
            <img
              src={editIcon}
              alt=""
              height="30px"
              width="30px"
              onClick={() => {
                setEditDescFlag(true);
              }}
            />
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default ManageGroupDetails;
