import { Box, Card, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import PrimaryButton from "../../components/buttons/PrimaryButton";
const GroupDetails = () => {
  const { state } = useLocation();
  console.log(state);
  const handleFileFetch = (id, filename) => {
    fetch(`http://localhost:3001/api/groups/getdocument/${id}/${filename}`, {
      method: "GET",
    }).then(async (response) => {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      window.open(url, "_blank");
    });
  };
  return (
    <Card
      sx={{
        m: 3,
        mt: 13,
        p: 3,
        width: "100%",
        border: "3px solid #08422D",
        borderRadius: "20px",
      }}
      elevation={5}
    >
      <Typography variant="h4">Group Details</Typography>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "3rem",
            borderBottom: "1px solid grey",
            paddingBottom: "10px",
          }}
          variant="h4"
          textAlign="center"
        >
          {state.idea.title}{" "}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            padding: "20px",
            wordWrap: "break-word",
            borderBottom: "1px solid grey",
            paddingBottom: "10px",
          }}
          textAlign="center"
        >
          {state.idea.description}{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          borderBottom: "1px solid grey",
          paddingBottom: "10px",
          paddingTop: "10px",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6">
            <span style={{ fontWeight: "700" }}>Class: </span>
            {state.class}
          </Typography>
          <Typography variant="h6">
            <span style={{ fontWeight: "700" }}>Team Lead: </span>
            {state.teamLead}{" "}
          </Typography>
          <Typography variant="h6">
            <span style={{ fontWeight: "700" }}>Supervisor: </span>
            {state.supervisor}{" "}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            display: "inline-block",
            marginLeft: 1,
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "inline-block", fontWeight: 700 }}
          >
            Team Members
          </Typography>
          {state.members.map((member, index) => (
            <Typography variant="h6" textAlign="left">
              {index + 1}.{" " + member.student_name}
            </Typography>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box>
          <Typography variant="h4" textAlign="center">
            Documentation
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <PrimaryButton
              sx={{
                flex: 1,
                margin: "5px",
                "&.Mui-disabled": {
                  backgroundColor: "lightgray",
                  color: "#08422D",
                },
              }}
              onClick={() => {
                handleFileFetch(
                  state._id,
                  state.documentation.proposal.filename
                );
              }}
              disabled={state.documentation.proposal.filename ? false : true}
            >
              Proposal
            </PrimaryButton>

            <PrimaryButton
              sx={{
                flex: 1,
                margin: "5px",
                "&.Mui-disabled": {
                  backgroundColor: "lightgray",
                  color: "#08422D",
                },
              }}
              onClick={() => {
                handleFileFetch(
                  state._id,
                  state.documentation.defense.filename
                );
              }}
              disabled={state.documentation.proposal.filename ? false : true}
            >
              Defense
            </PrimaryButton>

            <PrimaryButton
              sx={{
                flex: 1,
                margin: "5px",
                "&.Mui-disabled": {
                  backgroundColor: "lightgray",
                  color: "#08422D",
                },
              }}
              onClick={() => {
                handleFileFetch(
                  state._id,
                  state.documentation.final_documentation.filename
                );
              }}
              disabled={state.documentation.proposal.filename ? false : true}
            >
              Final Documentation
            </PrimaryButton>

            <PrimaryButton
              sx={{
                flex: 1,
                margin: "5px",
                "&.Mui-disabled": {
                  backgroundColor: "lightgray",
                  color: "#08422D",
                },
              }}
              onClick={() => {
                handleFileFetch(
                  state._id,
                  state.documentation.presentation.filename
                );
              }}
              disabled={state.documentation.proposal.filename ? false : true}
            >
              Final Presentation
            </PrimaryButton>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default GroupDetails;
