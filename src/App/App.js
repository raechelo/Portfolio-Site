import React, { useState } from "react";
import About from "../About/About.js";
import Nav from "../Nav/Nav.js";
import "../styles/styles.scss";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme.js";
import Title from "../components/Title/Title.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Typography } from "@mui/material";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div
          style={{
            height: "100vh",
          }}
        >
          <Nav />
          <div style={{ width: "95%", marginRight: "auto" }}>
            <Routes>
              <Route path="about" element={<About />} />
              {/* <Route path="home" element={<About />} /> */}
            </Routes>
          </div>
          <div
            style={{
              position: "absolute",
              right: "calc(0px - 13%)",
              top: "calc(0px + 22%)",
              transform: "rotate(90deg)",
            }}
          >
            <Title />
          </div>
          <Title title="raechel odom" />
          <Typography variant="h5">
            second loudest laugh in the west (second only to my sister)
          </Typography>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
