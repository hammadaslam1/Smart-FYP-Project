import { Box, Typography,Chip } from "@mui/material";
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const ManageUsers = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [users, setUsers] = useState(null);
  const fetchUsers = () => {
    fetch(`${url}/api/user/fetchusers`, {
      method: "POST",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        const sortedData = data.sort((a, b) => {
          if (a.verified === false && b.verified === true) {
            return -1;
          }
          if (a.verified === true && b.verified === false) {
            return 1;
          }
          return 0;
        });
        setUsers(sortedData);
      })
      .catch((err) => console.log(err));
  };
  const toggleUserStatus = (user) => {
    fetch(`${url}/api/user/toggleuserstatus/${user._id}`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response)=>{
      if(response.ok)
      {
        console.log("Status Updated Successfully")
        fetchUsers();
      }
    }).catch((error)=>alert(`there was an error in the catch ${error}`))
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <Box sx={{ mt: 10, p: 3 }}>
      <Typography
        variant="h4"
        sx={{
          color: "#08422D",
          fontWeight: "700",
        }}
      >
        Manage Users
      </Typography>
      <Box sx={{ width: "100%" }}>
        {users &&
          users.map((user) => (
            <Box
              key={user._id}
              sx={{
                mb: 2,
                border: "1px solid #ccc",
                padding: 2,
                width: "80vw",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography>
                  <strong>Name: </strong>
                  {user.name}
                </Typography>
                <Typography>
                  <strong>Email: </strong> {user.email}
                </Typography>
                <Typography>
                  <strong>Password:</strong> {user.password}
                </Typography>
                <Typography>
                  <strong>User ID: </strong>
                  {user.id}
                </Typography>
                <Typography>
                  <strong>User Status:</strong>{" "}
                  <Chip
                            sx={{
                              backgroundColor: user.verified ? "#0f0" : "#f00",
                              color: "#fff",
                              fontWeight: "600",
                            }}
                            label={user.verified ? "Verified" : "Unverified"}
                          />
                 
                </Typography>
              </Box>
              <Box>
                <PrimaryButton onClick={()=>{toggleUserStatus(user)}}>
                  {user.verified?"Disapprove":"Approve"}
                </PrimaryButton>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ManageUsers;
