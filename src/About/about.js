import { Card, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title/Title.js";

export default function About() {
  return (
    <Card className="about-section about-info">
      <Title title="Hello, there! I'm Raechel." />
      <Typography>
        There are three things you'll learn within minutes of meeting me: I play
        far too much D&D, I'm a big swiftie, and I have the loudest laugh you've
        probably ever heard for better or for worse.
      </Typography>
      <br />
      <Typography>
        I moved to Colorado in 2016 but before that, I lived in St. Louis,
        Missouri, and graduated from the University of Missouri-Columbia. At
        Mizzou, I achieved a Bachelor's degree in English with a specialization
        in Creative Writing and a minor in Classical Humanities. That degree
        lead me to working at two publishing companies and a newspaper before
        ultimately changing my career path to software.
      </Typography>
      <br />
      <Typography>
        Since beginning my career in software development, I have worked
        professionally in React/Redux and Angular/Ngrx, and have been curious
        enough to try out other frameworks, tools, and languages in my spare
        time.{" "}
      </Typography>
      <br />
      <Typography>
        When I'm not coding, I enjoy spending time with my fiance, playing
        Dungeons and Dragons, listening to Taylor Swift, crafting, sewing, and
        playing games.
      </Typography>
    </Card>
  );
}
