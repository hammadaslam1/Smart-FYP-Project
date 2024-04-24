import React from 'react';
import TextField from '@mui/material/TextField';

const NameField = (props) => {
  return (
    <TextField
      type="text"
      label="Name"
      variant="outlined"
      fullWidth
      color='success'
      {...props}
      required
    />
  );
};

export default NameField;
