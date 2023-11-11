import { Divider, Drawer, Button, Typography } from '@mui/material';
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

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
        <Button color='secondary' onClick={e => handleOpen(e)} style={{ marginLeft: 'auto', display: 'flex' }}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor='right'
          open={open}
          onClose={handleClose}
        >
          <div style={{ padding: '24px' }}>

            {/* <Typography>Choose an album</Typography> */}
            {/* // add list of TS albumbs here */}
            {/* <Divider /> */}
            <Typography>Contact me</Typography>
            <Typography>About me</Typography>
            {/* put links here to github, linkedin */}
            {/* add dark mode option here? will def conflict with customized themes tho */}
          </div>
        </Drawer>
      </>
    </div>
  )
}