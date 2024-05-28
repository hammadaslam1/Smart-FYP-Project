/* eslint-disable no-unused-vars */
import { Input,  Select } from "@mui/joy";
import Option from "@mui/joy/Option";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  TextField,
} from "@mui/material";

const SignupSelect = ({ ...props }) => {
  return (
    <FormControl sx={{ marginY: "4px", width: "100%" }} size="small">
      <FormLabel
        sx={{ fontSize: "14px", marginBottom: "2px", color: "#112d4e" }}
      >
        {props.label}
      </FormLabel>
      {/* <Input sx={{ padding: "8px 12px" }} {...props} required /> */}
      <select labelId="" id="" style={{ padding: "8px 12px" }} {...props}>
        <option value="" selected disabled>Select a role</option>
        <option value="Student">Student</option>
        <option value="Coordinator">Coordinator</option>
        <option value="Supervisor">Supervisor</option>
        <option value="HOD">HOD</option>
        {/* <option value="Principal">Principal</option> */}
      </select>
      {/* <textarea {...props} /> */}
      <FormHelperText sx={{ color: "#112d4e" }}>
        {props.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default SignupSelect;
