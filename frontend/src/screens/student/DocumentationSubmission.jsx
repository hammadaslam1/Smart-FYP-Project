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
import {useSelector} from 'react-redux'

const DocumentationSubmission = () => {
  const id = useSelector((state)=>state.student.student.group.group_id);
  const student = useSelector((state)=>state.student.student);
  const uploadButtonRef = useRef(null);
  const [type,setType] = useState("")
  const [fileName,setFileName] = useState("")
  const [file,setFile] = useState(null)
  const handleFileUpload = (e) => {
    setFile(e.target.files[0])
    const fileKaNaam = e.target.files[0].name;
    setFileName(fileKaNaam);
    
    
  };
  const handleFileSubmit = (e) => {
    // console.log(file,type,id);
    const formData = new FormData();
    formData.append('file', file);

    fetch(`http://localhost:3001/api/groups/documentationupload/${id}/${type}`,{
      method: 'POST',
      body: formData,
    }).then((response) => {
      if(response.ok){
      alert("submitted successfully")

      }
      else{
        alert("error")
      }
    }).catch((error) => {
      console.log("there was an error")
    })
  }
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
              onChange={(e)=>{setType(e.target.value)}}
            >
              <MenuItem value="Proposal">Proposal</MenuItem>
              <MenuItem value="Defense">Defense</MenuItem>
              <MenuItem value="Documentation">Documentation</MenuItem>
              <MenuItem value="Final Presentation">Final Presentation</MenuItem>
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
<PrimaryButton disabled={(student.group.group_id!="" && type!="" && file!=null)?false:true}  sx={{my:1, width:"110px",height:"40px"}} onClick={handleFileSubmit}>Upload</PrimaryButton>
      </Card>
    </Box>
  );
};

export default DocumentationSubmission;
