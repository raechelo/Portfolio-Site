import { createTheme } from "@mui/material/styles";

export const folkloreThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#767273",
    },
    secondary: {
      main: "#2d2d2d",
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

export const theme = createTheme(folkloreThemeOptions);
