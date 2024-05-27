import { Box, Card, Typography } from "@mui/material";
import SignupInput from "../../components/inputs/SignupInput";
import SignupSelect from "../../components/inputs/SignupSelect";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const AnnounceDocumentDate = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ color: "#08422D", p: 3, fontWeight: 600 }}>
        Announce Document Date
      </Typography>
      <Card sx={{ p: 3 }} elevation={0}>
        <SignupSelect
          label="Class"
          placeholder="Select Class"
          helperText="select from final year classes"
        />
        <SignupInput
          label="Document Type"
          placeholder="Enter Document Type"
          helperText="Enter document type to be submitted"
        />
        <SignupInput
          type="date"
          label="Last Date"
          placeholder=""
          helperText="Select last date for submission of document"
        />
        <div>
          <PrimaryButton sx={{width: '150px', height: '50px', my: 3}}>Submit</PrimaryButton>
        </div>
      </Card>
    </Box>
  );
};

export default AnnounceDocumentDate;
