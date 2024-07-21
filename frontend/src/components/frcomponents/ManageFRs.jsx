import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Button,
  TextField,
  Card,
  Typography,
  IconButton,
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
          return response.json();
        }
      })
      .then((data) => {
        setFRs(data);
      });
  };
  return (
    <>
      <Box>
        {FRs.map((fr, index) => (
            <FR index={index} fr={fr}/>
        ))}
      </Box>
    </>
  );
};
export default ManageFRs;
