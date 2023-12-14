import { createTheme } from "@mui/material/styles";

export const evermoreThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#c5aa92",
    },
    secondary: {
      main: "#7d3e28",
    },
  },
  typography: {
    h1: {
      fontFamily: "IM Fell DW Pica",
    },
    h2: {
      fontFamily: "IM Fell DW Pica",
    },
    h3: {
      fontFamily: "IM Fell DW Pica",
    },
    h4: {
      fontFamily: "IM Fell DW Pica",
    },
    h5: {
      fontFamily: "IM Fell DW Pica",
    },
    h6: {
      fontFamily: "IM Fell DW Pica",
    },
    subtitle1: {
      fontFamily: "Open Sans",
    },
    subtitle2: {
      fontFamily: "Open Sans",
    },
    body1: {
      fontFamily: "Open Sans",
    },
    body2: {
      fontFamily: "Open Sans",
    },
    button: {
      fontFamily: "Open Sans",
    },
    caption: {
      fontFamily: "Open Sans",
    },
    overline: {
      fontFamily: "Open Sans",
    },
  },
};

export const theme = createTheme(evermoreThemeOptions);
