import { createTheme } from "@mui/material/styles";

export const redThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#79323e",
    },
    secondary: {
      main: "#a80436",
    },
  },
  typography: {
    h1: {
      fontFamily: "Fjalla One",
      fontStyle: "italic",
    },
    h2: {
      fontFamily: "Fjalla One",
      fontStyle: "italic",
    },
    h3: {
      fontFamily: "Fjalla One",
      fontStyle: "italic",
    },
    h4: {
      fontFamily: "Fjalla One",
      fontStyle: "italic",
    },
    h5: {
      fontFamily: "Fjalla One",
      fontStyle: "italic",
    },
    h6: {
      fontFamily: "Fjalla One",
      fontStyle: "italic",
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

export const theme = createTheme(redThemeOptions);
