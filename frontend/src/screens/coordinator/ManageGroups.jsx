/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import {
    Box,
    Button,
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
  CircularProgress,
  tableCellClasses,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { WeeklyEvaluationData } from "../../data/WeeklyEvaluationData";
  import PrimaryButton from "../../components/buttons/PrimaryButton";
  import { basicInfo } from "../../data/BasicInfo";
  import { useNavigate } from "react-router-dom";
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
  
  const ManageGroups = () => {
    const navigate = useNavigate();
    const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(false);
const [reload,setReload] = useState(0);
    const [groups,setGroups] = useState([]);
    const getGroups = async () => {
      setLoading(true)
      const response = await fetch("http://localhost:3001/api/groups/getgroups");
      const data = await response.json();
      setGroups(data);
      setLoading(false)
    };
    const handleGroupStatus = async (row) => {
        const response = await fetch("http://localhost:3001/api/groups/updategroup/"+row._id, {
            method: "PUT",
            body: JSON.stringify(row),
            headers: {
              "Content-Type": "application/json",
            },
          });
        const data = await response.json();
        if(response){
            setFlag(prev => !prev)
        }
        
      };
    const handleGroupDelete = (id) => {
      setFlag(true)
      fetch(`http://localhost:3001/api/groups/deletegroup/${id}`, {
        method: "POST",
      }).then((response)=>{
        if(response.ok)
          {
            getGroups();
          }
          else{
            alert("there was a problem deleting")
          }
      }).catch((error) => {
        alert("Error:", error);
      });
     setFlag(false)
    }
    useEffect(() => {
      getGroups();
    },[flag]);
    return (<>
    {
      loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
          width="100%"
        >
          <CircularProgress color="success" />
        </Box>
      ):(
        <Box width="100%">
        <Typography variant="h4" sx={{ p: 2, color: "#08422D", fontWeight: 600 }}>
          FYP Groups
        </Typography>
        <Card sx={{ p: 3 }} elevation={0}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead sx={{ backgroundColor: "#08422D" }}>
                <TableRow>
                  <StyledHeadCell>Team Lead</StyledHeadCell>
                  <StyledHeadCell align="left">Class</StyledHeadCell>
                  <StyledHeadCell align="left">Members</StyledHeadCell>
                  <StyledHeadCell align="left">Supervisor</StyledHeadCell>
                  <StyledHeadCell align="left">Status</StyledHeadCell>
                  <StyledHeadCell align="left">Action</StyledHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {groups.length>0 && groups.map((row) => (
                  <StyledTableRow  sx={{
                    "&:hover": {
          backgroundColor: "lightgrey", 
          cursor:"pointer"
        },
                  }} key={row._id} onClick={() => {
                    navigate("/manage-group-details", {
                      state: row,
                    });
                  }}>
                    <StyledTableCell component="th" scope="row">
                      {row.teamLead}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.class}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.members.map((member) => (
                            <Typography>
                              {member.student_name + " | " + member.student_id}
                            </Typography>
                          ))}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.supervisor}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <Chip
                        label={row.status?"Approved":"Pending"}
                        sx={{
                          backgroundColor:
                            row.status? "#0f0" : "#f00",
                          color: "#fff",
                          "&:hover": {
                            backgroundColor:
                              row.status
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
                    <StyledTableCell align="left" sx={{display:"flex"}}>
                      <PrimaryButton
                      sx={{mx:1}}
                      onClick={()=>{handleGroupStatus(row)}}
                      >{row.status?"Reject":"Approve"}</PrimaryButton>
                      <PrimaryButton
                      sx={{mx:1,}}
                      onClick={()=>{handleGroupDelete(row._id)}}
                      >Delete</PrimaryButton>
                    </StyledTableCell>
                    
                  </StyledTableRow>
                  
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
      )
    }
          
    </>
      
    );
  };
  
  export default ManageGroups;
  