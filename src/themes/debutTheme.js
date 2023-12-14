import { createTheme } from "@mui/material/styles";

export const debutThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#748c6f",
    },
    secondary: {
      main: "#bfd9bd",
    },
  },
  typography: {
    h1: {
      fontFamily: "Sacramento",
    },
    h2: {
      fontFamily: "Sacramento",
    },
    h3: {
      fontFamily: "Sacramento",
    },
    h4: {
      fontFamily: "Sacramento",
    },
    h5: {
      fontFamily: "Sacramento",
    },
    h6: {
      fontFamily: "Sacramento",
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

export const theme = createTheme(debutThemeOptions);
