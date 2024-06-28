import { Box, Card, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
const GroupDetails = () => {
  const { state } = useLocation();
  console.log(state);
  return (
    <Card sx={{ mt: 10, p: 3 }}>
      <Box sx={{ width: "100%", border: "1px solid red" }}>
        <Typography variant="h4" textAlign="center">
          {state.idea.title}{" "}
        </Typography>
        <Typography variant="body1">{state.idea.description} </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          border: "1px solid red",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h4" textAlign="center">
          Supervisor: {state.supervisor}{" "}
        </Typography>
        <Typography variant="h4" textAlign="center">
          Team Lead: {state.teamLead}{" "}
        </Typography>
      </Box>
      <Box 
        sx={{
          width: "100%",
          border: "1px solid red",
        }}
      >
        <Typography variant="h4">Class: {state.class}</Typography>
        <Box sx={{ display: "flex" }}>
          <Typography variant="h4" sx={{ display: "inline-block" }}>
            Team Members:
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              display: "inline-block",
              marginLeft: 1,
            }}
          >
            {state.members.map((member) => (
              <Typography variant="h4" textAlign="left">
                {member.student_name}
              </Typography>
            ))}
          </Box>
        </Box>
        <Box>
          <Typography variant="h4" textAlign="center">
            Documentation
          </Typography>
          <Box>
            <Typography variant="h4" textAlign="center">
              Proposal
            </Typography>
            <Box
              sx={{
                margin: "0px auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Typography variant="h4">
                {state.documentation.proposal.filename}
              </Typography>
              <PrimaryButton sx={{ width: "200px" }}>Download</PrimaryButton>
            </Box>
          </Box>
          <Box>
            <Typography variant="h4" textAlign="center">
              Defense
            </Typography>
            <Box
              sx={{
                margin: "0px auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Typography variant="h4">
                {state.documentation.defense.filename}
              </Typography>
              <PrimaryButton sx={{ width: "200px" }}>Download</PrimaryButton>
            </Box>
          </Box>
          <Box>
            <Typography variant="h4" textAlign="center">
              Presentation
            </Typography>
            <Box
              sx={{
                margin: "0px auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Typography variant="h4">
                {state.documentation.presentation.filename}
              </Typography>
              <PrimaryButton sx={{ width: "200px" }}>Download</PrimaryButton>
            </Box>
          </Box>
          <Box>
            <Typography variant="h4" textAlign="center">
              Final Documentation
            </Typography>
            <Box
              sx={{
                margin: "0px auto",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "80%",
              }}
            >
              <Typography variant="h4">
                {state.documentation.final_documentation.filename}
              </Typography>
              <PrimaryButton sx={{ width: "200px" }}>Download</PrimaryButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default GroupDetails;
