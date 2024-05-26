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
      <Select labelId="" id="" sx={{ padding: "8px 12px" }} {...props}>
        <Option value="Student">Student</Option>
        <Option value="Coordinator">Coordinator</Option>
        <Option value="Supervisor">Supervisor</Option>
        <Option value="HOD">HOD</Option>
        <Option value="Principal">Principal</Option>
      </Select>
      {/* <textarea {...props} /> */}
      <FormHelperText sx={{ color: "#112d4e" }}>
        {props.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default SignupSelect;
