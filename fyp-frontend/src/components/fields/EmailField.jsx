import React from 'react';
import TextField from '@mui/material/TextField';

const EmailField = (props) => {
  return (
    <TextField
      type="email"
      label="Email"
      variant="outlined"
      fullWidth
      required
      {...props}
    />
  );
};

export default EmailField;
