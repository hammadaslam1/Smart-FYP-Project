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
import MembersAutoComplete from "../../components/fields/MembersAutoComplete";
import "../../styles/studentcomponentsstyles/selectgroup.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStudent } from "../../redux/studentReducer/studentSlice";

const GroupFormation = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const [students, setStudents] = useState(null);
  const [supervisors, setSupervisors] = useState(null);
  const [teamLead, setTeamLead] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [shift, setShift] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [members, setMembers] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
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
  const handleClassChange = async (e) => {
    const fypShift = e.target.value;
    setMembers([]);
    setShift(e.target.value);
  
    try {
      const response = await fetch(`http://localhost:3001/api/student/`);
      const responseData = await response.json();
  
      const studentInfo = responseData
        .filter((student) => fypShift === student.shift && !student.group.status)
        .map((student) => {
          if(student.student_id == currentUser.id) {
            console.log("if chall gai")
            setSelectedStudent(prev=>`${student.student_name} | ${student.student_id}`);
          }
          return `${student.student_name} | ${student.student_id}`});
      setStudents(studentInfo);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchStudent = () => {
    fetch(`http://127.0.0.1:3001/api/student/getstudent/${currentUser.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(setStudent(data));
      })
      .catch((error) => alert(error.message));
  };
  const handleSubmit = async () => {
    const splitarray = members.map((member) => {
      const temp = member.split(" | ");
      const obj = {
        student_name: temp[0],
        student_id: temp[1],
      };
      return obj;
    });
    const response = await fetch(
      "http://localhost:3001/api/groups/insertgroup",
      {
        method: "POST",
        body: JSON.stringify({
          teamLead: teamLead,
          class: studentClass,
          supervisor: supervisor,
          shift:shift,
          members: splitarray,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    if (!response.ok) {
      console.error("there was an error in submitting the group");
    }
    if (response.ok) {
      alert("Group Created Successfully!");
      fetchStudent();
    }
  };

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
          onChange={(e) => {setTeamLead(e.target.value)}}
        />
         <SignupInput
          label="Class"
          placeholder="Enter Class Name"
          color="success"
          onChange={(e) => setStudentClass(e.target.value)}
        />
        <FormControl sx={{ my: 2 }} fullWidth>
        <InputLabel id="demo-simple-select-label" color="success">
            Shift
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Shift"
            onChange={handleClassChange}
          >
            <MenuItem value="morning">Morning</MenuItem>
            <MenuItem value="evening">Evening</MenuItem>
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
              onChange={(e) => {
                setSupervisor(e.target.value);
              }}
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

        {/* <Autocomplete
          disabled={!students}
          color="success"
          sx={{ my: 1 }}
          multiple
          value={members}
          placeholder="Members"
          options={students ? students : ["select class"]}
          onChange={(e, value) => {
            setMembers(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Members"
              placeholder="Members"
            />
          )}
        /> */}
        <MembersAutoComplete students={students} selectedStudent={selectedStudent}/>

        <PrimaryButton
          onClick={handleSubmit}
          disabled={(members.length>1 && supervisor!="" && teamLead!="" && studentClass!="" && shift!="")?false:true}
          sx={{ my: 1, width: "150px", height: "50px" }}
        >
          Submit
        </PrimaryButton>
      </Card>
    </Box>
  );
};

export default GroupFormation;
