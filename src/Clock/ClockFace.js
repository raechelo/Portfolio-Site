import React, { useEffect, useRef } from 'react';

const CLOCK_PADDING = 64;

const ClockFace = ({ anchor }) => {
  const canvasRef = useRef(null);
  const height = Number(anchor.current?.clientHeight + CLOCK_PADDING);
  const width = Number(anchor.current?.clientWidth + CLOCK_PADDING);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = 'red';
    context.fillRect(0, 0, height, width);

    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

  }, [height, width]);

  return <canvas ref={canvasRef} height={height} width={width} />
}

export default ClockFace