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
  const url = process.env.REACT_APP_BACKEND_URL;
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
    fetch(`${url}/api/groups/fetchfrs/`, {
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
    fetch(`${url}/api/groups/updatefrs`, {
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
    fetch(`${url}/api/groups/deletefr`, {
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
    fetch(`${url}/api/groups/addnewfrs`, {
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
        <>
        {
          FRs.length>0?
        (<Box>
          
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
              
            </>
          )}
        </Box>):(
          <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"60vh"}}>
          <Typography variant="h2" color="grey" textAlign="center">No Functional Requirements to Preview!</Typography>
          <Typography variant="h1" color="grey" textAlign="center">Please add the FRs first</Typography>
          </Box>)
}
        </>

      )}

    </>
  );
};
export default ManageFRs;
