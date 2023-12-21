import { Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title/Title.js";

export default function About() {
  return (
    <section style={{ width: "90%", margin: "auto" }}>
      <section className="about-section about-info">
        <Typography>
          Hello, there! I'm Raechel. There's three things you'll learn within
          minutes of meeting me: I play far too much D&D, I'm a big swiftie, and
          I have the loudest laugh you've probably ever heard for better or for
          worse.
        </Typography>
        <br />
        <Typography>
          I moved to Colorado in 2016 but before that, I lived in St. Louis,
          Missouri, and graduated from the University of Missouri-Columbia. At
          Mizzou, I achieved a Bachelor's degree in English with a
          specialization in Creative Writing and a minor in Classical
          Humanities. That degree lead me to working at two publishing companies
          and a newspaper before ultimately changing my career path to software.
        </Typography>
        <br />
        <Typography>
          When I'm not coding, I enjoy spending time with my fiance, playing
          Dungeons and Dragons, listening to Taylor Swift, crafting, sewing, and
          playing games.
        </Typography>
      </section>
      {/* <img src={image} alt="profile pic"/> */}
    </section>
  );
}
