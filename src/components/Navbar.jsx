import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navbar = () => {
  return (
    <div>
      <AppBar> 
        <Toolbar>
            <IconButton size="large"
             edge="start"
             color="inherit"
             aria-label="menu"
             sx={{ mr: 2 }}> 
            </IconButton>
            <Typography variant="h6"> productapp</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained'>Add</Button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant='contained'>View</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
