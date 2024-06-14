import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#fff149"
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 25,
                    color:"white",
                    backgroundColor: "rgb(130,19,49)",
                    '&:hover': {
                        backgroundColor: "rgb(120,9,9)",
                        color: "white",
                    },
                },
            },
        },
    },
    typography: {
        button: {
            fontSize: "1rem"
        },
    },
});

export default theme