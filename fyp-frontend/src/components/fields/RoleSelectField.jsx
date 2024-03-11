import { FormControl,MenuItem,InputLabel,Select } from "@mui/material";
const RoleSelectField = (props) => {
    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Role"
                    {...props}
                >
                    <MenuItem value={'Student'}>Student</MenuItem>
                    <MenuItem value={'Coordinator'}>Coordinator</MenuItem>
                    <MenuItem value={'Supervisor'}>Supervisor</MenuItem>
                    <MenuItem value={'HOD'}>HOD</MenuItem>
                    <MenuItem value={'Principal'}>Principal</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default RoleSelectField;
