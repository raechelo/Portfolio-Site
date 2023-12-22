import React from "react";
import { Card, Chip, Grid, Typography } from "@mui/material";
import WesternDivider from "../assets/western-divider.svg";

const skills = [
  "javascript",
  "react",
  "angular",
  "vue",
  "css",
  "scss",
  "jest",
  "rtl",
  "next",
  "redux",
  "rxjs",
  "ngrx",
  "nodejs",
  "postgres",
  "jquery",
];

const Skills = () => {
  return (
    <Card sx={{ margin: "24px" }}>
      <Grid
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        style={{ width: "75%", textAlign: "center", margin: "auto" }}
      >
        {skills.map((skill) => (
          <Chip label={skill} />
        ))}
      </Grid>
      <div style={{ textAlign: "center" }}>
        <img src={WesternDivider} style={{ width: "100px" }} alt="" />
      </div>
      <Grid>
        <Typography variant="h3">Notable Accomplishments</Typography>
        <Typography variant="subtitle1">Expanding Horizons</Typography>
        <Typography>
          My career has been focused heavily in front-end development and
          recently I've gotten the chance to professionally contribute to the
          product and design decisions and weigh in on user interface.
        </Typography>
      </Grid>
    </Card>
  );
};
export default Skills;
