import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <SchoolIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          LearnEasy
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
