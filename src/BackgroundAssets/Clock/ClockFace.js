import React, { useCallback, useEffect, useRef, useState } from "react";

const CLOCK_PADDING = 64;

export const ClockFace = ({ anchor }) => {
  // CANVAS VARS
  const canvasRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  // STAR VARS
  const starCount = Math.round(Math.random() * 2190 - 1 + 1);

  const addStars = useCallback(
    (context) => {
      for (var i = 0; i < starCount; i++) {
        const x = Math.random() * width; // random x position
        const y = Math.random() * height; // random y position
        const radius = Math.random() * 1.1; // random radius
        const brightness = Math.round(Math.random() * 100 - 80 + 80) / 100;

        context.beginPath();
        context.globalAlpha = brightness;
        context.fillStyle = "#e9cbff";
        context.arc(x, y, radius, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
      }
    },
    [height, width, starCount]
  );

  const handleMouseMove = (e) => {
    const getMousePositionOnCanvas = (event) => {
      const rect = canvasRef.current.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };
  };

  useEffect(() => {
    setHeight(anchor.current?.clientHeight + CLOCK_PADDING);
    setWidth(anchor.current?.clientWidth + CLOCK_PADDING);
  }, [anchor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    addStars(context);
  }, [addStars]);

  return (
    <canvas
      ref={canvasRef}
      height={height}
      width={width}
      onMouseMove={(e) => handleMouseMove(e)}
    />
  );
};
