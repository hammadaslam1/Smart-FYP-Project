/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect, useState } from "react";
import { WeeklyEvaluationData } from "../../data/WeeklyEvaluationData";
import PrimaryButton from "../../components/buttons/PrimaryButton";


const WeeklyProgressEvaluation = () => {
  const [list, setList] = useState([]);
  const [filter, setFilter ] = useState(null);
  const [heading, setHeading ] = useState("All Groups");
  const handleFilterChange = (event) => {
    switch(event.target.value){
    case "All Groups":
      setHeading("All Groups")
    case "Morning Groups":
      setHeading("Morning Groups")
    case "Evening Groups":
      setHeading("Evening Groups")
    default:
      setHeading("All Groups")
    }
    setFilter(event.target.value);
  };
  useEffect(() => {
    setList(WeeklyEvaluationData);
  }, []);
  return (
    <Box sx={{width:"100%"}}>
      <Box sx={{width:"100%"}}>
      <Box sx={{display:"flex",mt:11,justifyContent:"space-between",alignItems:"center",px:3}}>
      <Typography variant="h4" sx={{ p: 2, color: "#08422D", fontWeight: 600 }}>
          Select Group For Evaluation
        </Typography>
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
                  <MenuItem value={"All Groups"}>All Groups</MenuItem>
                  <MenuItem value={"Morning Groups"}>Morning Groups</MenuItem>
                  <MenuItem value={"evening"}>Evening Groups</MenuItem>
                </Select>
              </FormControl>
        </Box>
              
            </Box>
      </Box>
      <Typography>
                {heading}
              </Typography>

    </Box>
  );
};

export default WeeklyProgressEvaluation;
