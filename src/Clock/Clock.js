import { Typography } from '@mui/material'
import React, { useEffect, useState, useRef } from 'react';
import ClockFace from './ClockFace';

const Clock = () => {
  const clockFaceRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const setDate = () => {
    const hourHand = document.getElementById('hour-hand');
    const minuteHand = document.getElementById('minute-hand');
    const secondHand = document.getElementById('second-hand');

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  return (
    <div className='clock'>
      <div className='clock-face' ref={clockFaceRef}>
        <ClockFace anchor={clockFaceRef} />
        <div className='center-dot'></div>
        <div className='hand' id='hour-hand'></div>
        <div className='hand' id='minute-hand'></div>
        <div className='hand' id='second-hand'></div>
        <Typography className='clock-num twelve' sx={{ fontSize: '2rem' }}>XII</Typography>
        <Typography variant='h4' className='clock-headline'>Meet me at <br /> Midnight</Typography>
      </div>
    </div>
  )
}

export default Clock;