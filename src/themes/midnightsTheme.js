import { createTheme } from "@mui/material/styles";

export const midnightsThemeOptions = {
  palette: {
    primary: {
      main: "#020035",
    },
    secondary: {
      main: "#e9cbff",
    },
  },
  typography: {
    h1: {
      fontFamily: "Noto Sans Kawi",
      fontWeight: 700,
      background:
        "linear-gradient(to right, hsl(223, 24%, 45%) 0%, hsl(200, 28%, 59%) 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      textAlign: "center",
    },
    h2: {
      fontFamily: "Noto Sans Kawi",
      background:
        "linear-gradient(to right, hsl(223, 24%, 45%) 0%, hsl(200, 28%, 59%) 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
      textAlign: "center",
    },
    h3: {
      fontFamily: "Noto Sans Kawi",
    },
    h4: {
      fontFamily: "Noto Sans Kawi",
      fontWeight: 700,
      background:
        "linear-gradient(to right, hsl(223, 24%, 45%) 0%, hsl(200, 28%, 59%) 100%)",
      "-webkit-background-clip": "text",
      "-webkit-text-fill-color": "transparent",
    },
    h5: {
      fontFamily: "Noto Sans Kawi",
    },
    h6: {
      fontFamily: "Noto Sans Kawi",
    },
    subtitle1: {
      fontFamily: "Noto Sans Kawi",
    },
    subtitle2: {
      fontFamily: "Noto Sans Kawi",
    },
    body1: {
      fontFamily: "Open Sans",
      color: "hsla(200, 28%, 59%, .8)",
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

export const theme = createTheme(midnightsThemeOptions);
