import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { AppbarCSS } from "./AppbarCSS";
import AdbIcon from "@mui/icons-material/Adb";

const Footer = () => {
    return (
        <Box elevation={0} sx={{backgroundColor: '#023d65'}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon
                        sx={{
                            mr: 1,
                            color: "#fff",
                        }}
                    />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={[
                            AppbarCSS.logo,
                            { color: '#fff' },
                        ]}
                    >
                        FYP
                    </Typography>
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Footer;
