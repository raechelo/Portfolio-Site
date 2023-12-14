import { createTheme } from "@mui/material/styles";

export const loverThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#fab0cf",
    },
    secondary: {
      main: "#ffeebc",
    },
  },
  typography: {
    h1: {
      fontFamily: "Satisfy",
    },
    h2: {
      fontFamily: "Satisfy",
    },
    h3: {
      fontFamily: "Satisfy",
    },
    h4: {
      fontFamily: "Satisfy",
    },
    h5: {
      fontFamily: "Satisfy",
    },
    h6: {
      fontFamily: "Satisfy",
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

export const theme = createTheme(loverThemeOptions);
