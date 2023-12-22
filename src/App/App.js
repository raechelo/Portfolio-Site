import React, { useState } from "react";
import About from "../About/About.js";
import Nav from "../Nav/Nav.js";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme.js";
import Title from "../components/Title/Title.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "../Skills/Skills.js";
import WesternCorner from "../assets/western-corner.svg";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div
          style={{
            height: "calc(100vh - 32px)",
            margin: "-8px",
            padding: "16px",
            background: "rgba(0, 0, 0, 0.1)",
          }}
        >
          <Nav />
          <div style={{ position: "relative", margin: "48px 24px" }}>
            <img
              src={WesternCorner}
              alt=""
              style={{ width: "200px", position: "absolute", left: 0, top: 0 }}
            />
            <div style={{ padding: "48px" }}>
              <Routes>
                <Route path="about" element={<About />} />
                <Route path="home" element={<About />} />
                <Route path="skills" element={<Skills />} />
              </Routes>
            </div>
            <img
              src={WesternCorner}
              alt=""
              style={{
                transform: "rotate(180deg)",
                width: "200px",
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: "16px",
              bottom: "16px",
            }}
          >
            <Title />
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
