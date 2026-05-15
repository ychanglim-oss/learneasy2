import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useStore from '../store';
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Results() {
  const navigate = useNavigate();
  const { sources, difficulty, outputFormat } = useStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container sx={{ flexGrow: 1, my: 4 }}>
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }}>
            <CircularProgress />
            <Typography variant="h6" sx={{ ml: 2 }}>
              Generating your content...
            </Typography>
          </Box>
        ) : (
          <>
            <Typography variant="h4" component="h1" gutterBottom>
              Your Results
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Sources</Typography>
                            <List>
                                {sources.map((source) => (
                                    <ListItem key={source}>
                                        <ListItemText primary={source} />
                                    </ListItem>
                                ))}
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Difficulty</Typography>
                            <Typography variant="body1">{difficulty}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Output Format</Typography>
                            <Typography variant="body1">{outputFormat}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                    Back to Home
                </Button>
            </Box>
          </>
        )}
      </Container>
      <Footer />
    </Box>
  );
}

export default Results;
