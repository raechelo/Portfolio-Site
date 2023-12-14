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
    <div className="wing ulw">
      <div className="ulw-innner inner-wing">
        <div className="ulw-inner-border inner-wing-border">
          <div className="ulw-dot-top dot" />
          <div className="ulw-dot-mid dot" />
          <div className="ulw-dot-bot dot" />
        </div>
      </div>
    </div>
    <div className="wing llw">
      <div className="llw-inner inner-wing">
        <div className="llw-inner-border inner-wing-border">
          <div className="llw-dot-top dot" />
          <div className="llw-dot-mid dot" />
          <div className="llw-dot-bot dot" />
        </div>
      </div>
    </div>
    <div className="wing urw">
      <div className="urw-inner inner-wing">
        <div className="urw-inner-border inner-wing-border">
          <div className="urw-dot-top dot" />
          <div className="urw-dot-mid dot" />
          <div className="urw-dot-bot dot" />
        </div>
      </div>
    </div>
    <div className="wing lrw">
      <div className="lrw-inner inner-wing">
        <div className="lrw-inner-border inner-wing-border">
          <div className="lrw-dot-top dot" />
          <div className="lrw-dot-mid dot" />
          <div className="lrw-dot-bot dot" />
        </div>
      </div>
    </div>
  </div>
);
