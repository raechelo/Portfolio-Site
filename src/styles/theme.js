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
      fontFamily: "Courier Prime",
    },
    subtitle2: {
      fontFamily: "Courier Prime",
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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "25px",
          boxShadow:
            "0px 5px 5px -3px rgb(25 37 155 / 10%), 0px 8px 10px 1px rgb(25 37 155 / 10%), 0px 3px 14px 2px rgb(25 37 155 / 20%)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "Courier Prime",
          color: "#fff",
          fontWeight: "bold",
          margin: "8px",
          "&:nth-of-type(even)": {
            backgroundColor: "#19259b",
          },
          "&:nth-of-type(odd)": {
            backgroundColor: "#747474",
          },
          "&:last-of-type": {
            marginRight: "auto",
          },
        },
      },
    },
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontFamily: "Courier Prime",
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);
