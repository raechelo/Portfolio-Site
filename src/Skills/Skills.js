import React from "react";
import { Card, Chip, Grid, Link, Typography } from "@mui/material";
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
  "d3",
  "chartsjs",
  "figma",
];

const Skills = () => {
  return (
    <Card sx={{ margin: "24px", maxHeight: "63vh", overflowY: "scroll" }}>
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
        <Typography>
          I've spent three years working professionally in React/Redux and
          before that, a year working in Angular/Ngrx. During my three years
          working in React, my skill level has increased immensely, but I am
          always looking for ways to improve my code and increase my knowledge.
          <br />
          <br />
          In 2021 I got the idea for a pet project to help people search for
          micro-plastic free face washes.{" "}
          <Link href="https://github.com/raechelo/wash-your-face">
            Wash Your Face!
          </Link>{" "}
          is still in development, but I've been taking the chance to explore
          new to me frameworks, languages, and server development. The frontend
          is built with Vue and the backend is written in Node using Express to
          populate a Postgres managed database. The backend also leverages
          web-scraping to find the ingredients of a searched for face-wash and
          searches those ingredients for possible micro-plastics. The end result
          is intended to be used as a free resource for anyone who wants to
          avoid micro-plastics and help save the oceans and wildlife.
          <br />
          <br />
          During my career, I've spent a lot of time working with charting
          libraries such as Charts.js and D3, creating dynamic and aesthetic
          data displays for user consumption.
        </Typography>
      </Grid>
    </Card>
  );
};
export default Skills;
