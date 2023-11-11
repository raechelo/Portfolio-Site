import { ThemeOptions, createTheme } from "@mui/material";

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#020035',
    },
    secondary: {
      main: '#e9cbff',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Noto Sans Kawi',
      fontWeight: 700,
      background: 'linear-gradient(to right, hsla(223, 24%, 45%, .8) 0%, hsla(200, 28%, 59%, .8) 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    h2: {
      fontFamily: 'Noto Sans Kawi',
    },
    h3: {
      fontFamily: 'Noto Sans Kawi',
    },
    h4: {
      fontFamily: 'Noto Sans Kawi',
      fontWeight: 700,
      background: 'linear-gradient(to right, hsla(223, 24%, 45%, .8) 0%, hsla(200, 28%, 59%, .8) 100%)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    h5: {
      fontFamily: 'Noto Sans Kawi',
    },
    h6: {
      fontFamily: 'Noto Sans Kawi',
    },
    subtitle1: {
      fontFamily: 'Noto Sans Kawi',
    },
    subtitle2: {
      fontFamily: 'Noto Sans Kawi',
    },
    body1: {
      fontFamily: 'Noto Sans Kawi',
    },
    body2: {
      fontFamily: 'Noto Sans Kawi',
    },
    button: {
      fontFamily: 'Noto Sans Kawi',
    },
    caption: {
      fontFamily: 'Noto Sans Kawi',
    },
    overline: {
      fontFamily: 'Noto Sans Kawi',
    },
  },
};

export const theme = createTheme(themeOptions);