import React from 'react';
import Nav from '../Nav/Nav';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme.ts';
import Home from '../Home/Home.js';
import '../styles.css';

export default function App() {
  var defaultTheme = localStorage.getItem('theme');

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{
        backgroundColor: 'rgb(2,0,53)',
        backgroundImage: 'linear-gradient(138deg, rgb(2, 0, 53) 75%, rgba(120, 161, 181, 0.3) 100%)',
        height: '100vh',
      }} >
        <Nav />
        <Home />
      </div>
    </ThemeProvider>
  )
}
