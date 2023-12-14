import { Divider, Drawer, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ClickAwayListener } from "@mui/material";

export default function Nav({
  open,
  handleDrawer,
  openThemePicker,
  currentTheme,
}) {
  // const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    if (e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }
    handleDrawer(true);
  };

  return (
    <ClickAwayListener onClickAway={() => handleDrawer(false)}>
      <>
        <Button
          color="secondary"
          onClick={(e) => handleOpen(e)}
          style={{ marginLeft: "auto", display: "flex" }}
        >
          <MenuIcon />
        </Button>
        <Drawer anchor="right" open={open} onClose={() => handleDrawer(false)}>
          <div style={{ padding: "24px" }}>
            <Typography>Current theme: {currentTheme}</Typography>
            <Button variant="contained" onClick={openThemePicker}>
              Pick a theme
            </Button>
            <Divider />
            <Typography>Contact me</Typography>
            <Typography>About me</Typography>
            {/* put links here to github, linkedin */}
            {/* add dark mode option here? will def conflict with customized themes tho */}
          </div>
        </Drawer>
      </>
    </ClickAwayListener>
  );
}
