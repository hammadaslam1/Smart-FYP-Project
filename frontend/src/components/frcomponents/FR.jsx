import {
  Box,
  Button,
  TextField,
  Card,
  Typography,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const FR = ({ fr, index, onUpdate, onDelete }) => {
  const [newValues, setNewValues] = useState({
    title: fr.title,
    description: fr.description,
  });
  const [isEdit, setIsEdit] = useState(true);

  return (
    <Card
      id={index}
      elevation={5}
      sx={{
        my: 1,
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {isEdit ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <Box>
            <Typography variant="h5">
              <strong>Title: </strong>
              {fr.title}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">
              <strong>Description: </strong>
              {fr.description}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <TextField
            sx={{ width: "100%", my: 1 }}
            color="success"
            multiline
            minRows={1}
            //   label={`FR${i + 1}`}
            label={"Title"}
            name={`title`}
            value={newValues.title}
            onChange={(e) => {
              setNewValues({ ...newValues, ["title"]: e.target.value });
            }}
            InputLabelProps={{
              style: { fontWeight: "bold", color: "#08422D" },
            }}
          />
          <TextField
            sx={{ width: "100%" }}
            color="success"
            multiline
            minRows={2}
            value={newValues.description}
            onChange={(e) => {
              setNewValues({ ...newValues, ["description"]: e.target.value });
            }}
            label={`Description`}
            name={`description`}
            InputLabelProps={{
              style: { fontWeight: "bold", color: "#08422D" },
            }}
          />
        </Box>
      )}

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <IconButton
          onClick={() => {
            setIsEdit((prev) => !prev);
          }}
        >
          {isEdit ? (
            <FiEdit color="#08422D" />
          ) : (
            <CheckCircleOutlineIcon
              onClick={() => {
                onUpdate(index, newValues);
              }}
              sx={{ color: "#08422D" }}
            />
          )}
        </IconButton>
        <IconButton>
          <RiDeleteBin6Line color="red" onClick={()=>{onDelete(index)}}/>
        </IconButton>
      </Box>
    </Card>
  );
};
export default FR;
