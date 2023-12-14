import React from "react";
import "./styles.css";

export const Butterfly = () => (
  <div className="butterfly">
    <div className="antenna-left" />
    <div className="antenna-right" />
    <div className="head" />
    <div className="body body-main">
      <div className="body body-bulb body-bulb-top" />
      <div className="body body-bulb body-bulb-bottom" />
      <div className="body body-bulb body-bulb-bottom-two" />
    </div>
    <div className="wing left-wing-upper">
      <div className="left-inner-wing-upper inner-wing" />
    </div>
    <div className="wing left-wing-lower">
      <div className="left-inner-wing-lower inner-wing" />
    </div>
    <div className="wing right-wing-upper">
      <div className="right-inner-wing-upper inner-wing" />
    </div>
    <div className="wing right-wing-lower">
      <div className="right-inner-wing-lower inner-wing" />
    </div>
  </div>
);
