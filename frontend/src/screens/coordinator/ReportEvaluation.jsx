/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
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
import { weeklyReportData } from "../../data/WeeklyReportData";

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

const ReportEvaluation = () => {
  return (
    <Box sx={{pt:10}}>
      <Typography variant="h4" sx={{ p: 3, color: "#08422D", fontWeight: 600 }}>
        Weekly Evaluation Report 
      </Typography>
      <Card sx={{ p: 3 }} elevation={0}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#08422D" }}>
              <TableRow>
                <StyledHeadCell>Group Name</StyledHeadCell>
                <StyledHeadCell align="left">Group Members</StyledHeadCell>
                <StyledHeadCell align="left">Class Name</StyledHeadCell>
                <StyledHeadCell align="left">Supervisor Name</StyledHeadCell>
                <StyledHeadCell align="left">Co-supervisor Name</StyledHeadCell>
                <StyledHeadCell align="left">Week No.</StyledHeadCell>
                <StyledHeadCell align="left">Week Progress</StyledHeadCell>
                <StyledHeadCell align="left">Next Task</StyledHeadCell>
                <StyledHeadCell align="left">
                  Remarks by Co-supervisor
                </StyledHeadCell>
                <StyledHeadCell align="left">
                  Remarks by Supervisor
                </StyledHeadCell>
                <StyledHeadCell align="left">
                  Remarks by Supervisor
                </StyledHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {weeklyReportData.map((row) => (
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
                    {row.supervisorName}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.coSupervisorName}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.weekNo}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.weekProgress}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.nextTask}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.remarksByCoSupervisor}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.remarksBySupervisor}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.remarksByCoordinator}
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

export default ReportEvaluation;
