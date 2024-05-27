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

const DocumentEvaluation = () => {
  return (
    <Box sx={{mt: 13}}>
      <Typography variant="h4" sx={{ p: 3, color: "#08422D", fontWeight: 600 }}>
        Weekly Progress Evaluation
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
                <StyledHeadCell align="left">Document Type</StyledHeadCell>
                <StyledHeadCell align="left">Document File</StyledHeadCell>
                <StyledHeadCell align="left">
                  Coordinator Evaluation
                </StyledHeadCell>
                <StyledHeadCell align="left">
                  Supervisor Evaluation
                </StyledHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  Hammad Aslam
                </StyledTableCell>
                <StyledTableCell align="left">
                  Hammad Aslam, Saad Afzal
                </StyledTableCell>
                <StyledTableCell align="left">BSIT Post ADP</StyledTableCell>
                <StyledTableCell align="left">Farrah Aslam</StyledTableCell>
                <StyledTableCell align="left">Project Proposal</StyledTableCell>
                <StyledTableCell align="left">
                  <PrimaryButton>Download</PrimaryButton>
                </StyledTableCell>
                <StyledTableCell align="left">Pending</StyledTableCell>
                <StyledTableCell align="left">A</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};

export default DocumentEvaluation;
