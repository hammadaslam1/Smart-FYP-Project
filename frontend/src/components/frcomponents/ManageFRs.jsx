import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  TextField,
  Card,
  Typography,
  IconButton,
  CircularProgress,
} from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import { useState, useEffect } from "react";
import editIcon from "../assets/icons/editing-icon.png";
import DeleteIcon from "@mui/icons-material/Delete";
import FR from "./FR";
const ManageFRs = () => {
  const student = useSelector((state) => state.student.student);
  const group_id = student.group.group_id;
  const [FRs, setFRs] = useState([{ title: "", description: "" }]);
  const [timer, setTimer] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [FRCount, setFRCount] = useState([]);
  const [newFRflag, setNewFRflag] = useState(false);
  const [newFRs, setNewFRs] = useState([{ title: '', description: '' }]);
  useEffect(() => {
    fetchFRs();
  }, []);
  const fetchFRs = () => {
    fetch("http://localhost:3001/api/groups/fetchfrs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ group_id: group_id }),
    })
      .then((response) => {
        if (response.ok) {
          setIsLoading(false);
          return response.json();
        }
      })
      .then((data) => {
        setFRs(data);
      });
  };
  setTimeout(() => {
    setTimer(false);
  }, 1000);
  const handleUpdate = (index, fr) => {
    setIsLoading(true);
    const tempUpdatedFRs = FRs.map((val, i) => (i === index ? fr : val));
    fetch("http://localhost:3001/api/groups/updatefrs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FRs: tempUpdatedFRs,
        group_id: group_id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          fetchFRs();
          setIsLoading(false);
        } else {
          alert("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDelete = (index) => {
    const tempUpdatedFRs = FRs.filter((val, i) => {
      if (i !== index) {
        return val;
      }
    });
    setIsLoading(true);
    fetch("http://localhost:3001/api/groups/deletefr", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FRs: tempUpdatedFRs,
        group_id: group_id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          fetchFRs();
          setIsLoading(false);
        } else {
          alert("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleFRs = (e, index, field) => {
    const updatedFRs = [...newFRs];
    updatedFRs[index] = {
      ...updatedFRs[index],
      [field]: e.target.value,
    };
    setNewFRs(updatedFRs);
  };
  const handleNewFRSave = () => {
    fetch('http://localhost:3001/api/groups/addnewfrs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FRs: newFRs,
        group_id: group_id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          fetchFRs();
          setNewFRflag(false);
        } else {
          alert('Failed to submit form');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  return (
    <>
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
          width="100%"
        >
          <CircularProgress color="success" />
        </Box>
      ) : (
        <Box>
          {timer ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="50vh"
              width="100%"
            >
              <CircularProgress color="success" />
            </Box>
          ) : (
            <>
              {FRs.map((fr, index) => (
                <FR
                  index={index}
                  fr={fr}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              ))}
              {newFRflag ? (
                <>
                  {FRCount.map((data, i) => (
                    <Card
                      elevation={5}
                      key={i}
                      sx={{ p: 2, my: 1, border: "1px solid #08422D" }}
                    >
                      <TextField
                        sx={{ width: "100%", my: 1 }}
                        color="success"
                        multiline
                        minRows={1}
                        label={`Title`}
                        name={`title`}
                        onChange={(e) => handleFRs(e, i, "title")}
                        InputLabelProps={{
                          style: { fontWeight: "bold", color: "#08422D" },
                        }}
                      />
                      <TextField
                        sx={{ width: "100%" }}
                        color="success"
                        multiline
                        minRows={2}
                        label={`Description`}
                        name={`description`}
                        onChange={(e) => handleFRs(e, i, "description")}
                        InputLabelProps={{
                          style: { fontWeight: "bold", color: "#08422D" },
                        }}
                      />
                    </Card>
                  ))}
                </>
              ) : (
                <></>
              )}
              <Box>
                  <PrimaryButton
          sx={{ width: '60px', height: '50px' }}
          onClick={() => {
            setFRCount([...FRCount, FRCount.length + 1]);
            setNewFRflag(true);
            // setFRs([...FRs, { title: '', description: '' }]);
          }}
        >
          <span style={{ fontSize: '2rem', padding: 0 }}>+</span>
        </PrimaryButton>
        <PrimaryButton
          disabled={(
            newFRs.some((fr) => fr.title === '' || fr.description === '') ||
            newFRs.length === 0
          )?true:false
            // ?false:true
          }
          sx={{ width: '100px', height: '50px', marginLeft: '10px',"&.Mui-disabled": {
                  backgroundColor: "lightgray",
                  color: "#08422D",
                }, }}
          onClick={handleNewFRSave}
        >
          Submit
        </PrimaryButton>
                </Box>
            </>
          )}
        </Box>
      )}
    </>
  );
};
export default ManageFRs;
