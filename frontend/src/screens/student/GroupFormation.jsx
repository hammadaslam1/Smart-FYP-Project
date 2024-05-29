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
  const handleStudents = async () => {
    try {
      await fetch("http://localhost:3001/api/student/getAllStudents")
        .then((response) => response.json())
        .then((responseData) => {
          const studentNames = responseData.map((student) => student.student_name);
          setStudents(studentNames);
          console.log(studentNames);
        })
        .catch((error) => alert(error));
      // const data = await res.json();
      // if (data.success === false) {
      //   return dispatch(signinFailure(data.message));
      // }
      // if (res.ok) {
      //   console.log(data);
      //   dispatch(signinSuccess(data));
      //   setOpenLogin(false);
      //   navigate("/");
      // }
    } catch (error) {
      return dispatch(signinFailure(error.message));
    }
  };
  useEffect(() => {
    handleStudents();
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
          label="Group Name"
          placeholder="Enter group name"
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
          >
            <MenuItem value="BSCS 7th Morning">BSCS 7th Morning</MenuItem>
            <MenuItem value="BSIT 7th Evening">BSIT 7th Evening</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ my: 2 }} fullWidth>
          <InputLabel id="demo-simple-select-label" color="success">
            Choose Supervisor
          </InputLabel>
          <Select
            color="success"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Docuement Type*"
          >
            <MenuItem value="Ms. Farrah Aslam">Ms. Farrah Aslam</MenuItem>
            <MenuItem value="Mr. Adil Waheed">Mr. Adil Waheed</MenuItem>
            <MenuItem value="Prof. Imran Kazmi">Prof. Imran Kazmi</MenuItem>
          </Select>
        </FormControl>

        <Typography
          sx={{ color: "#08422D", fontWeight: 600 }}
          variant="caption"
        >
          Note! Select Minimum 1 and Maximum 2 members for group
        </Typography>
        {students&&<Autocomplete
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
        />}

        <PrimaryButton sx={{ my: 1, width: "150px", height: "50px" }}>
          Submit
        </PrimaryButton>
      </Card>
    </Box>
  );
};

export default GroupFormation;
