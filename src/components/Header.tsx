import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';

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
        <Button color="inherit" component={Link} to="/pricing">
          Pricing
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
