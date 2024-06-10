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
 
  const [students, setStudents] = useState(null);
  const [supervisors, setSupervisors] = useState(null);
  const [teamLead,setTeamLead] = useState("");
  const [studentClass,setStudentClass] = useState("");
  const [supervisor,setSupervisor] = useState("");
  const [members,setMembers] = useState([]);
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
    setStudentClass(e.target.options[e.target.selectedIndex].text);
    try{
     const response = fetch(`http://localhost:3001/api/student/${fypClass}`).then((response) => response.json())
     .then((responseData) => {
       const studentNames = responseData.map(
         (student) => student.student_name
       );
       setStudents(studentNames);
     }).catch((error)=>{ console.error(error)})
    }catch{

    }
  };
  const handleSubmit = () => {
    // alert(`Team Lead: ${teamLead} \n Student Class: ${studentClass} \n Supervisor ${supervisor} \n Team Members: ${members}`)
  }
  useEffect(() => {
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
          onChange={(e) => setTeamLead(e.target.value)}
        />
        <FormControl sx={{ my: 2 }} fullWidth>
          <label id="demo-simple-select-label" color="success">
            Class
          </label>
          <select
            style={{
              width: '100%',
              height:"50px"
            }}
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Docuement Type*"
            onChange={handleClassChange}
          >
            <option value="">Select Class</option>
            <option value="morning-students">BSCS 7th Morning</option>
            <option value="evening-students">BSIT 7th Evening</option>
          </select>
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
              onChange={(e)=>{setSupervisor(e.target.value)}}
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
        
          <Autocomplete
            disabled={!students}
            color="success"
            sx={{ my: 1 }}
            multiple
            placeholder="Members"
            options={students?students:["select class"]}
            onChange={(e,value)=>{setMembers(value)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Members"
                placeholder="Members"
              />
            )}
          />
   

        <PrimaryButton 
        onClick={handleSubmit}
        sx={{ my: 1, width: "150px", height: "50px" }}>
          Submit
        </PrimaryButton>
      </Card>
    </Box>
  );
};

export default GroupFormation;
