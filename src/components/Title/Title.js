import { Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

const Title = ({ title }) => {
  let location = useLocation();

  return (
    <Typography
      variant="h1"
      style={{
        fontSize: "5rem",
        WebkitTextStroke: "2px #19258b",
        backgroundImage:
          "linear-gradient(60deg, rgba(25, 37, 139, 70%), rgba(116, 116, 116, 70%))",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {title || `${location.pathname.slice(1)}`}
    </Typography>
  );
};

export default Title;
