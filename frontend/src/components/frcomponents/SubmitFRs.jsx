import SignupInput from "../../components/inputs/SignupInput";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryButton from "../buttons/PrimaryButton";

const SubmitFRs = () => {
  const [FRCount, setFRCount] = useState([1]);
  const [FRs, setFRs] = useState([]);
  const student = useSelector((state) => state.student.student);
  const group_id = student.group.group_id;
  console.log(group_id);
  const handleFRs = (e, index) => {
    const updatedFRs = [...FRs];
    updatedFRs[index] = {
      ...updatedFRs[index],
      [e.target.name]: e.target.value,
    };
    setFRs(updatedFRs);
    console.log(FRs);
  };
  const handleFRSave = () => {
    fetch("http://localhost:3001/api/groups/submitfrs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        FRs: FRs,
        group_id: group_id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Form submitted successfully");
        } else {
          alert("Failed to submit form");
        }
        console.log(response);
      })
      .catch((error) => {});
  };
  return (
    <Box>
      <Box sx={{ width: "700px" }}>
        <span style={{color:"red"}}>[Select Manage FRs if you have already entered the Functional Requirements]</span>
        {FRCount.map((data, i) => (
          <Box key={i}>
            <TextField
              sx={{ width: "100%", my: 1 }}
              color="success"
              multiline
              minRows={1}
              label={`FR${i + 1}`}
              name={`FR${i + 1}`}
              onChange={(e) => handleFRs(e, i)}
              InputLabelProps={{
                style: { fontWeight: "bold" },
              }}
            ></TextField>
          </Box>
        ))}
        <PrimaryButton
          sx={{ width: "60px", height: "50px" }}
          onClick={() => {
            setFRCount([...FRCount, FRCount.length + 1]);
            setFRs([...FRs, {}]);
          }}
        >
          <span style={{ fontSize: "2rem", padding: 0 }}>+</span>
        </PrimaryButton>
        <PrimaryButton
          sx={{ width: "100px", height: "50px", marginLeft: "10px" }}
          onClick={handleFRSave}
        >
          Submit
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default SubmitFRs;
