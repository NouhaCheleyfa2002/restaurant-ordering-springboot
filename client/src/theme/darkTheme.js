import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",

    primary: {
      main: "#e9791eff",
    },

    secondary: {
      main: "#0D0D0D",
    },

    background: {
      default: "#0D0D0D", // page background
      paper: "#121212",   // cards, navbar, dialogs
    },

    text: {
      primary: "#FFFFFF",
      secondary: "#B0B0B0",
    },
  },
});
