import {
  Box,
  Card,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import "../../styles/studentcomponentsstyles/documentationsubmission.css";
import SignupSelect from "../../components/inputs/SignupSelect";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import UploadButton from "../../components/buttons/UploadButton";
import { useRef, useState } from "react";
const DocumentationSubmission = () => {
  const uploadButtonRef = useRef(null);
  const [fileName,setFileName] = useState(null);
  const handleFileUpload = (e) => {
    const result = e.target.files[0];
    if(result)
      {
        setFileName(result.name);
        
        
      }
  };
  return (
    <Box sx={{ pt: 10 }}>
      <Typography variant="h4" sx={{ color: "#08422D", p: 3, fontWeight: 600 }}>
        Upload Document
      </Typography>
      <Card
      elevation={0}
        sx={{
          px: 3
        }}
      >
          <FormControl sx={{my:2}} fullWidth>
            <InputLabel  id="demo-simple-select-label" color="success">Document Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Docuement Type*"
              color="success"
            >
              <MenuItem value="Introduction">Introduction</MenuItem>
              <MenuItem value="Thesis">Thesis</MenuItem>
              <MenuItem value="Abstract">Abstract</MenuItem>
            </Select>
          </FormControl>
          
          <Typography variant="h6"
          sx={{ px: 0, color: "#08422D", fontWeight: 600 }}>Select the PDF file to upload:</Typography>
          <Typography variant="h6"
          sx={{ px: 0, color: "#08422D", fontWeight: 600 }}>Note:</Typography>
          <Typography variant="p"
          sx={{ px: 0, color: "#08422D", fontWeight: 600 }}>
            File name should be a combination of your group name and document
            type.
          </Typography>
          <UploadButton  onClick={() => uploadButtonRef.current.click()}/>
          {fileName && <Typography variant="p">[{fileName}] Selected!</Typography>}
          <input ref={uploadButtonRef}
          onChange={handleFileUpload}
          style={{
            display: "none",
            marginTop: 10,
        fontWeight: "700",
        width: "100%",
        alignSelf: "center",
        // boxShadow: "1px 2px 5px 1px #00000019",
        color: "#08422D",
        textTransform: "capitalize"
      }} type="file" accept="application/pdf" />
<br />
<PrimaryButton   sx={{my:1, width:"110px",height:"40px"}}>Upload</PrimaryButton>
      </Card>
    </Box>
  );
};

export default DocumentationSubmission;
