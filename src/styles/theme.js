import { createTheme } from "@mui/material/styles";

export const themeOptions = {
  palette: {
    type: "light",
    primary: {
      main: "#19259b",
    },
    secondary: {
      main: "#747474",
    },
  },
  typography: {
    h1: {
      fontFamily: "Rye",
    },
    h2: {
      fontFamily: "Rye",
      color: "#19259b",
    },
    h3: {
      fontFamily: "Rye",
    },
    h4: {
      fontFamily: "Rye",
    },
    h5: {
      fontFamily: "Rye",
      color: "#19259b",
    },
    h6: {
      fontFamily: "Rye",
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
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          "&:hover": {
            background:
              "linear-gradient(60deg, rgba(25, 37, 139, 12%), rgba(116, 116, 116, 12%))",
          },
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
