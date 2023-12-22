import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        {["about", "skills", "contact"].map((item) => (
          <Button
            onClick={() => {
              navigate(`/${item}`);
            }}
            key={`nav-menu-${item}`}
            sx={{ color: "#fff" }}
          >
            {item}
          </Button>
        ))}
        <div style={{ marginLeft: "auto" }}>
          <Typography variant="h6">raechel odom</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}
