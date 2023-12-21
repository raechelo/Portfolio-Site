import { Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const Title = ({ title }) => {
  let location = useLocation();
  const elementRef = useRef(null);
  const [width, setWidth] = useState();

  const getTitle = () => {
    switch (location.pathname) {
      case "/contact":
        return "contact me";
      case "/projects":
        return "projects";
      case "/skills":
        return "my skills";
      default:
        return "about me";
    }
  };

  const getWidth = (el) => {
    elementRef.current = el.currentTarget.width;
  };

  useEffect(() => {
    // setWidth(elementRef.current ? elementRef.current.offsetWidth : 0);
    // console.log(
    //   "width",
    //   elementRef.current ? elementRef.current.offsetWidth : 0
    // );
  }, [elementRef]);

  return (
    <Typography
      variant="h1"
      ref={elementRef}
      style={{
        fontSize: "5rem",
        WebkitTextStroke: "2px #19258b",
        backgroundImage:
          "linear-gradient(60deg, rgba(25, 37, 139, 70%), rgba(116, 116, 116, 70%))",
        backgroundClip: "text",
        color: "transparent",
        // width: getWidth()
      }}
    >
      {title || getTitle()}
    </Typography>
  );
};

export default Title;
