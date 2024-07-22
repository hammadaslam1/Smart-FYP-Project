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
  setTimeout(()=>{setTimer(false)},1000)
  const handleUpdate = (index,fr) => {
    setIsLoading(true);
    const tempUpdatedFRs = FRs.map((val,i)=>i===index?fr:val)
    fetch('http://localhost:3001/api/groups/updatefrs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
          alert('Failed to submit form');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  const handleDelete = (index) => {
    const tempUpdatedFRs = FRs.filter((val,i)=>{
      if(i !== index)
      {
        return val;
      }
    } ); 
    setIsLoading(true);
    fetch('http://localhost:3001/api/groups/deletefr', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
          alert('Failed to submit form');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
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
          {
            timer?(
              <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="50vh"
              width="100%"
            >
              <CircularProgress color="success" />
            </Box>):(
              <>
              {FRs.map((fr, index) => (
              <FR index={index} fr={fr} onUpdate={handleUpdate} onDelete={handleDelete}/>
            ))}
              </>
            )
          }
          
        </Box>
      )}
    </>
  );
};
export default ManageFRs;
