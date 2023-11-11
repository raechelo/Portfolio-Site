import React from 'react';
import Nav from '../Nav/Nav';
import { ThemeProvider } from '@mui/material/styles';
import { theme, themeOptions } from '../theme.ts';
import Home from '../Home/Home.js';
import '../styles.css';

export default function App() {
  var defaultTheme = localStorage.getItem('theme');


  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{
        backgroundColor: themeOptions.palette.primary.main,
        height: '100vh',
      }} >
        <Nav />
        <Home />
      </div>
    </ThemeProvider>
  )
}
