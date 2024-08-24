import { createTheme, ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#fdf500",
    },
    secondary: {
      main: "#51dffa",
      contrastText: "#000000",
    },
    error: {
      main: "#ff124f",
    },
    warning: {
      main: "#fdf500",
    },
    info: {
      main: "#3c94f0",
    },
    success: {
      main: "#00ffa0",
    },
  },
  typography: {
    button: {
      fontFamily: "Orbitron",
      fontWeight: 600,
    },
    fontFamily: "Roboto",
    h1: {
      fontFamily: "Orbitron",
    },
    h2: {
      fontFamily: "Orbitron",
    },
    h3: {
      fontFamily: "Orbitron",
    },
    overline: {
      fontFamily: "Roboto",
    },
    h4: {
      fontFamily: "Orbitron",
    },
    h5: {
      fontFamily: "Orbitron",
    },
    h6: {
      fontFamily: "Orbitron",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          // "clip-path":
          //   "polygon(0 0, 80% 0, 100% 40%, 100% 100%, 100% 100%, 20% 100%, 0 60%)",
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;
