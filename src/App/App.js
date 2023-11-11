import React from 'react';
import Nav from '../Nav/Nav';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme.ts';
import Clock from '../Clock/Clock';
import About from '../About/about.js';
import '../styles.css';

export default function App() {
  var defaultTheme = localStorage.getItem('theme');

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{
        backgroundColor: 'rgb(2,0,53)',
        backgroundImage: 'linear-gradient(151deg, rgba(0,0,28,1) 0%, rgba(2,0,53,1) 75%, rgba(120,161,181,.25) 100%)',
        height: '100vh'
      }} >
        <Nav />
        <div style={{ position: 'relative', height: '90%' }}>
          <Clock />
          <div style={{ position: 'absolute', left: '50%', top: 36, overflowY: 'scroll', height: '100%' }}>
            <About />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
