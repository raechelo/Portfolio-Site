import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import { red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default function App() {
  var defaultTheme = localStorage.getItem('theme');


  return (
    <ThemeProvider theme={theme} >
      <section className="App" >
        <Nav />
      </section>
    </ThemeProvider>
  )
}

// {({
//   style,
// }) => (
//   <nav style={style}>
//     {/* ... */}
//     <Nav />
//   </nav>
// )}