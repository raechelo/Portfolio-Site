import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import WesternDivider from "../assets/western-divider.svg";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <AppBar>
      <Toolbar>
        <Grid
          display="flex"
          justifyContent="space-between"
          style={{ width: "100%" }}
        >
          {["about", "skills", "contact"].map((item) => (
            <Button
              onClick={() => {
                navigate(`/${item}`);
              }}
              key={`nav-menu-${item}`}
              sx={{ color: "#fff" }}
              color="secondary"
            >
              {item}
            </Button>
          ))}
          <div style={{ marginLeft: "auto" }}>
            <Typography variant="h6">raechel odom</Typography>
          </div>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
