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
const WeeklyProgressEvaluation = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(WeeklyEvaluationData);
  }, []);
  return (
    <Box>
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
                <StyledHeadCell align="left">Supervisor Name</StyledHeadCell>
                <StyledHeadCell align="left">Document Type</StyledHeadCell>
                <StyledHeadCell align="left">Document File</StyledHeadCell>
                <StyledHeadCell align="left">
                  Supervisor Evaluation
                </StyledHeadCell>
                <StyledHeadCell align="left">
                  Coordinator Evaluation
                </StyledHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {WeeklyEvaluationData.map((row) => (
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
                    {row.documentType}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <PrimaryButton>Download</PrimaryButton>
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.supervisorEvaluation}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row.coordinationEvaluation}
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

export default WeeklyProgressEvaluation;
