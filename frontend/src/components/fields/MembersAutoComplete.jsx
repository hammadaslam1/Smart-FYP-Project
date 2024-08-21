import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function MembersAutocomplete({ students,selectedStudent, members, setMembers }) {
  // Initialize the state with a default selected member
  

  return (
    <Autocomplete
    //   disabled={!students}
      color="success"
      sx={{ my: 1 }}
      multiple
      value={members}
      options={students || ["Select Shift"]}
      onChange={(e, value) => {
        // Prevent unselecting the default member (students[0])
        if (!value.includes(selectedStudent)) {
          value.push(selectedStudent);
        }
        setMembers(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label={"Select Members"}
          placeholder="Members"
        />
      )}
    />
  );
}
