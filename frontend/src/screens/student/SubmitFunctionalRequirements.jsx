import {Box, Typography,Card,FormControl,InputLabel,Select,MenuItem} from '@mui/material'
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { useState } from 'react';
const SubmitFunctionalRequirements = () => {
    const [componentType,setComponentType] = useState("");
    const [componentHeading,setComponentHeading] = useState("Submit Functional Requirements");
    let component = null;
    const handleSelect = (e) => {
        setComponentType(e.target.value);
        switch(e.target.value){
            case "Submit FRs":
                component = <>
                </>;
                setComponentHeading("Submit Functional Requirements");
                break;
            case "Manage FRs":
                component = <>
                </>;
                setComponentHeading("Manage Functional Requirements");

                break;
            default:
                component = null;
        }
    }
    return ( 
        <Box sx={{ pt: 10, width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 3,
          }}
        >
          <Typography variant="h3">{componentHeading}</Typography>
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
                onChange={handleSelect}
              >
                <MenuItem value={"Submit FRs"}>Submit FRs</MenuItem>
                <MenuItem value={"Manage FRs"}>Manage FRs</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>{component}</Box>
      </Box>
     );
}
 
export default SubmitFunctionalRequirements;