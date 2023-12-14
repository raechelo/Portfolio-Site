import { createTheme } from "@mui/material/styles";

export const speaknowThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#ad8fab",
    },
    secondary: {
      main: "#513823",
    },
  },
  typography: {
    h1: {
      fontFamily: "Rochester",
    },
    h2: {
      fontFamily: "Rochester",
    },
    h3: {
      fontFamily: "Rochester",
    },
    h4: {
      fontFamily: "Rochester",
    },
    h5: {
      fontFamily: "Rochester",
    },
    h6: {
      fontFamily: "Rochester",
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

export const theme = createTheme(speaknowThemeOptions);
