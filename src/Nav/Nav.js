import MenuIcon from "@mui/icons-material/Menu";
import { Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { theme } from "../styles/theme";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const anchorEl = useRef();
  const navigate = useNavigate();

  const handleOpen = (e) => {
    setOpen(true);
    anchorEl.current = e.target;
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button
        color="secondary"
        onClick={(e) => handleOpen(e)}
        style={{
          marginRight: "auto",
          display: "flex",
        }}
      >
        <MenuIcon />
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl.current}
        onClose={handleClose}
        sx={{
          ".MuiMenu-paper": {
            border: `1px solid ${theme.palette.primary.main}`,
            boxShadow:
              "0px 5px 5px -3px rgb(25 37 155 / 10%), 0px 8px 10px 1px rgb(25 37 155 / 10%), 0px 3px 14px 2px rgb(25 37 155 / 20%)",
          },
        }}
      >
        {["about", "projects", "skills", "contact"].map((item) => (
          <MenuItem
            onClick={() => {
              navigate(`/${item}`);
              handleClose();
            }}
            key={`nav-menu-${item}`}
          >
            <Typography>{item}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
