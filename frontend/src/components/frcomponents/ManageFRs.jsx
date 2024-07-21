import { useDispatch, useSelector } from "react-redux";
import { Box, Button, TextField, Card, Typography } from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import { useState,useEffect } from "react";
const ManageFRs = () => {
  const student = useSelector((state) => state.student.student);
  const group_id = student.group.group_id;
  const [FRs, setFRs] = useState([{ title: "", description: "" }]);
  useEffect(()=>{
    fetchFRs();
},[])
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
    <Box sx={{width:"700px"}}>
    {
        FRs.map((fr,index)=>(
            <Card id={index} elevation={5} sx={{my:1,p:2}}>
            
            <Typography variant="h5">{fr.title}</Typography>
            <Typography variant="h5">{fr.description}</Typography>
            </Card>
        ))
    }
    </Box>
    
    </>
  );
};
export default ManageFRs;
