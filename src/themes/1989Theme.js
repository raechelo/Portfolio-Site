import { createTheme } from "@mui/material/styles";

export const seagullThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#7aa5bf",
    },
    secondary: {
      main: "#dad5c9",
    },
  },
  typography: {
    h1: {
      fontFamily: "Permanent Marker",
    },
    h2: {
      fontFamily: "Permanent Marker",
    },
    h3: {
      fontFamily: "Permanent Marker",
    },
    h4: {
      fontFamily: "Permanent Marker",
    },
    h5: {
      fontFamily: "Permanent Marker",
    },
    h6: {
      fontFamily: "Permanent Marker",
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

export const theme = createTheme(seagullThemeOptions);
