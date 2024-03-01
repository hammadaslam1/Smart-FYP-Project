import { Box, Button, Card, Input, Typography } from "@mui/material";
import { LoginCSS } from "../styles/LoginCSS";

const Login = () => {
    return (
        <Box sx={LoginCSS.loginBox}>
            <Box>
                <Typography className="loginLeftHeading">
                    Welcome to My System
                </Typography>
                <Typography>A short descriptions</Typography>
            </Box>
            <Box>
                <Card sx={LoginCSS.loginCard} elevation={20}>
                    <Box sx={LoginCSS.loginFields}>
                        <Typography variant="h3">Login</Typography>
                        <Input type="email" />
                        <Input type="password" />
                        <Button variant="contained">Login</Button>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default Login;
