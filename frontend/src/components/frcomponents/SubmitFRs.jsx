import SignupInput from "../../components/inputs/SignupInput";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SubmitFRs = () => {
  const [FRCount, setFRCount] = useState([1]);
  const [FRs, setFRs] = useState([]);
  const student = useSelector((state) => state.student.student);
    const group_id = student.group.group_id
    console.log(group_id);
  const handleFRs = (e, index) => {
    const updatedFRs = [...FRs];
    updatedFRs[index] = { ...updatedFRs[index], [e.target.name]: e.target.value };
    setFRs(updatedFRs);
    console.log(FRs)
  };
  const handleFRSave = () => {
    fetch("http://localhost:3001/api/groups/submitfrs",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            FRs:FRs,
            group_id: group_id
        }),
  
    }).then((response)=>{
        if(response.ok){
            alert("Form submitted successfully")
        }else{
            alert("Failed to submit form")
        }
        console.log(response)
      }).catch((error)=>{
    })
  }
  return (
    <Box>
      <Box sx={{ width: "700px" }}>
        {FRCount.map((data, i) => (
          <Box key={i}>
            <SignupInput name={`FR${i + 1}`} onChange={(e) => handleFRs(e, i)} />
          </Box>
        ))}
        <Button
          variant="outlined"
          onClick={() => {
            setFRCount([...FRCount, FRCount.length + 1]);
            setFRs([...FRs, {}]);
          }}
        >
          +
        </Button>
        <Button
          variant="outlined"
          onClick={handleFRSave}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default SubmitFRs;
