import {
  Box,
  Typography,
  Card,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useDispatch, useSelector } from "react-redux";

import { useState,useEffect } from "react";
import SubmitFRs from "../../components/frcomponents/SubmitFRs";
import ManageFRs from "../../components/frcomponents/ManageFRs";
const SubmitFunctionalRequirements = () => {
  const student = useSelector((state) => state.student.student);
  const group_id = student.group.group_id;
  const [componentType, setComponentType] = useState("");
  const [isLoading,setIsLoading] = useState(true);
  const [component, setComponent] = useState(<SubmitFRs/>);
  const [componentHeading, setComponentHeading] = useState(
    "Submit Functional Requirements"
  );
  const handleSelect = (value) => {
    setComponentType(value);
    switch (value) {
      case "Submit FRs":
        setComponent(prev=><SubmitFRs/>)
        setComponentHeading("Submit Functional Requirements");
        break;
      case "Manage FRs":
        setComponent(prev=><ManageFRs/>)
        setComponentHeading("Manage Functional Requirements");
        break;
      default:
        component = null;
    }
  };
  useEffect(()=>{
    fetch("http://localhost:3001/api/groups/fetchfrs/",{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
      },body:JSON.stringify({group_id:group_id})
    }).then((response)=>{
      if(response.ok)
      {
        setIsLoading(false)
        return response.json()
      }
    }).then((data)=>{
      console.log(data)
      if(data.length>0)
      {
        handleSelect("Manage FRs");
      }
    })
  },[])
  return (
    <>
{
      isLoading?(
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width="100%"
      >
        <CircularProgress color="success" />
      </Box>
      ):( <Box sx={{ pt: 10, width: "100%" }}>
      
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 3,
          }}
        >
          <Typography variant="h3" sx={{color: "#08422D"}}>{componentHeading}</Typography>
          <Box>
            <FormControl fullWidth>
              <InputLabel
                color="success"
                id="demo-simple-select-label"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <FilterAltIcon /> Type
              </InputLabel>
              <Select
                sx={{ width: "300px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={componentType}
                label="filtering.."
                color="success"
                onChange={(e)=>handleSelect(e.target.value)}
              >
                <MenuItem value={"Submit FRs"}>Submit FRs</MenuItem>
                <MenuItem value={"Manage FRs"}>Manage FRs</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{mx:3}}>{component}</Box>
      </Box>)
    }
    </>
    
   
  );
};

export default SubmitFunctionalRequirements;
