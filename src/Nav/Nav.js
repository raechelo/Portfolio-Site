import { Divider, Drawer, Button, Menu, Typography } from '@mui/material';
import React, { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <>
        <Button onClick={e => handleOpen(e)}>
          <Menu />
          OPEN BAYBAY
        </Button>
        <Drawer
          anchor='right'
          open={open}
          onClose={handleClose}
        >
          <Typography>Choose an album</Typography>
          {/* // add list of TS albumbs here */}
          <Divider />
          <Typography>Contact me</Typography>
          <Typography>About me</Typography>
          {/* put links here to github, linkedin */}
          {/* add dark mode option here? will def conflict with customized themes tho */}
        </Drawer>
        {/* <Scrollchor to="#" className="nav-link">home</Scrollchor>
      <Scrollchor to="#about" className="nav-link">about</Scrollchor>
      <Scrollchor to="#contact" className="nav-link">contact</Scrollchor>
    <Scrollchor to="#projects" className="nav-link">projects</Scrollchor> */}
      </>
    </div>
  )
}