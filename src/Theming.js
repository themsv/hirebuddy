import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#fe414d",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      main: "#ccc",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
      disabled: "#000000",
    },
  },
  typography: {
    button: {
      fontSize: "2.9rem",
    },
  },
});
