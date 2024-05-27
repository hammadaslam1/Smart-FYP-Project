/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  Chip,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useEffect, useState } from "react";
import { WeeklyEvaluationData } from "../../data/WeeklyEvaluationData";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { basicInfo } from "../../data/BasicInfo";

const StyledHeadCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#08422D",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const IdeaApproval = () => {
  return (
    <Box>
      <Typography variant="h4" sx={{ p: 3, color: "#08422D", fontWeight: 600 }}>
        Idea Approval
      </Typography>
      <Card sx={{ p: 3 }} elevation={0}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead sx={{ backgroundColor: "#08422D" }}>
              <TableRow>
                <StyledHeadCell>Group Name</StyledHeadCell>
                <StyledHeadCell align="left">Group Members</StyledHeadCell>
                <StyledHeadCell align="left">Class Name</StyledHeadCell>
                <StyledHeadCell align="left">Coordinator Name</StyledHeadCell>
                <StyledHeadCell align="left">Project Title</StyledHeadCell>
                <StyledHeadCell align="left">Project Details</StyledHeadCell>
                <StyledHeadCell align="left">Coordinator Status</StyledHeadCell>
                <StyledHeadCell align="left">Supervisor Status</StyledHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basicInfo.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.groupName}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.groupMembers.join(", ")}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.className}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.coordinatorName}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.projectTitle}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.projectDetails}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.coordinatorStatus}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Chip
                      label={row.supervisorStatus}
                      sx={{
                        backgroundColor:
                          row.supervisorStatus == "Approved" ? "#0f0" : "#f00",
                        color: "#fff",
                        "&:hover": {
                          backgroundColor:
                            row.supervisorStatus == "Approved"
                              ? "#0f0"
                              : "#f00",
                          color: "#fff",
                        },
                      }}
                      disableFocusRipple
                      disableElevation
                      disableRipple
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default IdeaApproval;
