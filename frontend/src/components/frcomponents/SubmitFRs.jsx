import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, TextField, Card } from '@mui/material';
import PrimaryButton from '../buttons/PrimaryButton';
import { useNavigate } from 'react-router-dom';

const SubmitFRs = ({handleSelect}) => {
  const navigate  = useNavigate();
  const [FRCount, setFRCount] = useState([1]);
  const [FRs, setFRs] = useState([{ title: '', description: '' }]);
  const student = useSelector((state) => state.student.student);
  const group_id = student.group.group_id;
  
  const handleFRs = (e, index, field) => {
    const updatedFRs = [...FRs];
    updatedFRs[index] = {
      ...updatedFRs[index],
      [field]: e.target.value,
    };
    setFRs(updatedFRs);
  };
  
  const handleFRSave = () => {
    fetch('http://localhost:3001/api/groups/submitfrs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        FRs: FRs,
        group_id: group_id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert('Form submitted successfully');
          handleSelect("Manage FRs");
        } else {
          alert('Failed to submit form');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <Box>
      <Box sx={{ width: '700px' }}>
        {FRCount.map((data, i) => (
          <Card elevation={5} key={i} sx={{ p: 2, my: 1,border:"1px solid #08422D" }}>
            <TextField
              sx={{ width: '100%', my: 1 }}
              color="success"
              multiline
              minRows={1}
              label={`FR`}
              name={`title`}
              onChange={(e) => handleFRs(e, i, 'title')}
              InputLabelProps={{
                style: { fontWeight: 'bold',color:"#08422D" },
              }}
            />
            <TextField
              sx={{ width: '100%' }}
              color="success"
              multiline
              minRows={2}
              label={`Description`}
              name={`description`}
              onChange={(e) => handleFRs(e, i, 'description')}
              InputLabelProps={{
                style: { fontWeight: 'bold',color:"#08422D"  },
              }}
            />
          </Card>
        ))}
        <PrimaryButton
          sx={{ width: '60px', height: '50px' }}
          onClick={() => {
            setFRCount([...FRCount, FRCount.length + 1]);
            setFRs([...FRs, { title: '', description: '' }]);
          }}
        >
          <span style={{ fontSize: '2rem', padding: 0 }}>+</span>
        </PrimaryButton>
        <PrimaryButton
          disabled={(
            FRs.some((fr) => fr.title === '' || fr.description === '') ||
            FRs.length === 0
          )?true:false
            // ?false:true
          }
          sx={{ width: '100px', height: '50px', marginLeft: '10px',"&.Mui-disabled": {
                  backgroundColor: "lightgray",
                  color: "#08422D",
                }, }}
          onClick={handleFRSave}
        >
          Submit
        </PrimaryButton>
      </Box>
    </Box>
  );
};

export default SubmitFRs;
