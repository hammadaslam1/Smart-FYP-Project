import {
  Autocomplete,
  Box,
  Card,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import SignupInput from "../../components/inputs/SignupInput";
import "../../styles/studentcomponentsstyles/selectgroup.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useEffect, useState } from "react";
const GroupFormation = () => {
  // const [formData,setFormData] = useState(
  //   {
  //     teamLead:"",
  //     class:""
  //   }
  // )
  const [students, setStudents] = useState(null);
  const [supervisors, setSupervisors] = useState(null);
  const handleStudents = async () => {
    try {
      await fetch("http://localhost:3001/api/student/getAllStudents")
        .then((response) => response.json())
        .then((responseData) => {
          const studentNames = responseData.map(
            (student) => student.student_name
          );
          setStudents(studentNames);
          console.log(studentNames);
        })
        .catch((error) => alert(error));
     
    } catch (error) {
       console.error(error);
    }
  };
  const handleSupervisors = async () => {
    try {
      await fetch("http://localhost:3001/api/supervisor/getAllSupervisors")
        .then((response) => response.json())
        .then((responseData) => {
          const supervisorNames = responseData.map(
            (supervisor) => supervisor.supervisor_name
          );
          setSupervisors(supervisorNames);
          console.log(supervisorNames);
        })
        .catch((error) => alert(error));
    } catch (error) {
      console.error(error);
    }
  };
  const handleClassChange = (e) => {
    const fypClass = e.target.value;
    try{
     const response = fetch(`http://localhost:3001/api/student/${fypClass}`).then((response) => response.json())
     .then((responseData) => {
       const studentNames = responseData.map(
         (student) => student.student_name
       );
       setStudents(studentNames);
       console.log(studentNames);
     }).catch((error)=>{ console.error(error)})
    }catch{

    }
  };
  
  useEffect(() => {
    handleStudents();
    handleSupervisors();
  }, []);
  return (
    <Box sx={{ pt: 10 }}>
      <Typography variant="h4" sx={{ color: "#08422D", p: 3, fontWeight: 600 }}>
        Select Group
      </Typography>
      <Card
        elevation={0}
        sx={{
          px: 3,
        }}
      >
        <SignupInput
          label="Team Lead"
          placeholder="Enter team lead"
          color="success"
        />
        <FormControl sx={{ my: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label" color="success">
            Class
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Docuement Type*"
            onChange={handleClassChange}
          >
            <MenuItem value="morning-students">BSCS 7th Morning</MenuItem>
            <MenuItem value="evening-students">BSIT 7th Evening</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ my: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label" color="success">
            Choose Supervisor
          </InputLabel>
          {supervisors && (
            <Select
              color="success"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Docuement Type*"
              
            >
              {supervisors.map((supervisor) => (
                <MenuItem value={supervisor}>{supervisor}</MenuItem>
              ))}
            </Select>
          )}
        </FormControl>

        <Typography
          sx={{ color: "#08422D", fontWeight: 600 }}
          variant="caption"
        >
          Note! Select Minimum 1 and Maximum 2 members for group
        </Typography>
        {students && (
          <Autocomplete
            color="success"
            sx={{ my: 1 }}
            multiple
            placeholder="Members"
            options={students}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Members"
                placeholder="Members"
              />
            )}
          />
        )}

        <PrimaryButton sx={{ my: 1, width: "150px", height: "50px" }}>
          Submit
        </PrimaryButton>
      </Card>
    </Box>
  );
};

export default GroupFormation;
