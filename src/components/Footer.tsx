import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
} from '@mui/icons-material';

function Footer() {
  return (
    <AppBar position="static" component="footer" sx={{ mt: 4 }}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="body2" color="inherit" sx={{ flexGrow: 1 }}>
            &copy; {new Date().getFullYear()} LearnEasy. All rights reserved.
          </Typography>
          <Box>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
