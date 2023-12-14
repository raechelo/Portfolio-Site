import { ClickAwayListener } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import About from "../About/about.js";
import { Clock, Butterfly } from "../BackgroundAssets";
import EraModal from "../EraModal/EraModal.js";
import Nav from "../Nav/Nav";
import "../styles.css";
import themeMap from "../themes/index.js";

export default function App() {
  const storedThemeName = localStorage.getItem("themeName");
  const [themeName, setThemeName] = useState(storedThemeName || "midnights");
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleOpenThemePicker = () => {
    setModalOpen(true);
  };

  const handleUpdateTheme = (era) => {
    setThemeName(era);
    handleClose();
  };

  const handleClose = () => {
    setDrawerOpen(false);
    setModalOpen(false);
  };

  return (
    <ThemeProvider theme={themeMap[themeName]}>
      <ClickAwayListener onClickAway={handleClose}>
        <>
          <div
            className={`App ${themeName}-bg`}
            style={{
              height: "100vh",
            }}
          >
            <Nav
              openThemePicker={handleOpenThemePicker}
              currentTheme={themeName}
              handleDrawer={setDrawerOpen}
              open={drawerOpen}
            />
            <div style={{ position: "relative", height: "90%" }}>
              {themeName === "midnights" && <Clock />}
              {themeName === "debut" && <Butterfly />}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 36,
                  overflowY: "scroll",
                  height: "100%",
                }}
              >
                <About />
              </div>
            </div>
          </div>
          <EraModal
            open={modalOpen}
            handleClose={handleClose}
            handleUpdateTheme={handleUpdateTheme}
          />
        </>
      </ClickAwayListener>
    </ThemeProvider>
  );
}
