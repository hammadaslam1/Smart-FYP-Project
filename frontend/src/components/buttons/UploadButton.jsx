import { Upload } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

const UploadButton = ({onClick}) => {
    return ( 
        
        <div className="draganddrop">
          <div className="drop-body">
            <Button
              className="drag-btn"
              sx={{ padding: "50px", color: "gray" }}
              size="large"
              disableRipple={true}
              onClick={onClick}
            >
              <Upload fontSize="large" />
              <div>
                <Typography variant="h6">Click to Upload</Typography>
                <Typography variant="body2" color="gray">
                  or just drag and drop
                </Typography>
              </div>
            </Button>
          </div>
        </div>
     );
}
 
export default UploadButton;