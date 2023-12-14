import { createTheme } from "@mui/material/styles";

export const reputationThemeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#767273",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "UnifrakturMaguntia",
    },
    h2: {
      fontFamily: "UnifrakturMaguntia",
    },
    h3: {
      fontFamily: "UnifrakturMaguntia",
    },
    h4: {
      fontFamily: "UnifrakturMaguntia",
    },
    h5: {
      fontFamily: "UnifrakturMaguntia",
    },
    h6: {
      fontFamily: "UnifrakturMaguntia",
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

export const theme = createTheme(reputationThemeOptions);
