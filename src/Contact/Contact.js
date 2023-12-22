import {
  Card,
  Grid,
  IconButton,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import me from "../assets/me.jpg";
import zeus from "../assets/zeus.jpg";
import meandjake from "../assets/meandjake.jpg";
import { styled } from "@mui/system";

const StyledGridItem = styled(Grid)(() => ({
  padding: "64px",
  display: "flex",
  "> img": {
    marginRight: "24px",
  },
  "> .MuiTypography-subtitle1": {
    height: "fit-content",
    margin: "auto",
  },
}));

const Contact = () => {
  return (
    <Card style={{ maxHeight: "62vh", overflowY: "scroll" }}>
      <Grid
        spacing={1}
        style={{
          position: "sticky",
          top: " 0px",
          width: "fit-content",
          margin: "auto",
          background: "#e5e5e5",
          borderRadius: "25px",
          padding: "8px",
        }}
      >
        <Tooltip title="github">
          <IconButton
            component={Link}
            href="https://github.com/raechelo/"
            target="blank"
          >
            <GitHubIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="linkedin">
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="email">
          <IconButton>
            <EmailIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="medium">
          <IconButton>
            <FontAwesomeIcon icon={faMedium} />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid>
        <StyledGridItem item>
          <img
            src={me}
            style={{ width: "200px" }}
            alt="me with blue and grey hair curled"
          />
          <Typography variant="subtitle1">
            Me in 2022 excited about my new hair (which will soon become my
            entire personality) and the Farrah Fawcett curls the stylist gave
            me.
          </Typography>
        </StyledGridItem>
        <StyledGridItem item>
          <img
            src={zeus}
            style={{ width: "200px" }}
            alt="a ten year great dane named Zeus sitting pretty next to a display of his pawprint"
          />
          <Typography variant="subtitle1">
            Zeus, my beloved Great Dane who passed away on his birthday, May 4,
            2023. He was 11 years old.
          </Typography>
        </StyledGridItem>
        <StyledGridItem item>
          <img
            src={meandjake}
            style={{ width: "200px" }}
            alt="me and my fiance before seeing Dracula as a ballet"
          />
          <Typography variant="subtitle1">
            My fiance, Jake, and myself before seeing Dracula as a ballet.
          </Typography>
        </StyledGridItem>
      </Grid>
    </Card>
  );
};

export default Contact;
