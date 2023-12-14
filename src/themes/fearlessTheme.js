import { createTheme } from "@mui/material/styles";

export const fearlessThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#f2c685",
    },
    secondary: {
      main: "#513823",
    },
  },
  typography: {
    h1: {
      fontFamily: "Montserrat",
    },
    h2: {
      fontFamily: "Montserrat",
    },
    h3: {
      fontFamily: "Montserrat",
    },
    h4: {
      fontFamily: "Montserrat",
    },
    h5: {
      fontFamily: "Montserrat",
    },
    h6: {
      fontFamily: "Montserrat",
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

export const theme = createTheme(fearlessThemeOptions);
