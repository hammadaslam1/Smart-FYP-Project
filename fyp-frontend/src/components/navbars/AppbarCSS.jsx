export const AppbarCSS = {
    menuProps: {
        elevation: 0,
        sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
            },
            "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 15,
                width: 12,
                height: 12,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
            },
        },
    },
    logo: {
        mr: 2,
        fontFamily: "monospace",
        fontWeight: 700,
        letterSpacing: ".3rem",
        color: "#023d65",
        textDecoration: "none",
    },
    appBtn: {
        my: 2,
        backgroundColor: "#fff",
        color: "#023d65",
        display: "block",
        "&:hover": { backgroundColor: "#fff" },
    },
};
