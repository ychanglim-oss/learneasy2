import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Chip } from '@mui/material';

const Pricing = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <Typography variant="h2" component="h1" align="center" gutterBottom>
                Pricing & Plans
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Choose the plan that's right for you. Get started for free, or unlock powerful features with our Pro plan.
            </Typography>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Free
                            </Typography>
                            <Typography variant="h4" component="p" gutterBottom>
                                $0/mo
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                For individual users who want to try out the basic features.
                            </Typography>
                            <ul>
                                <li>Up to 5 sources per project</li>
                                <li>Basic AI-powered learning</li>
                                <li>Community support</li>
                            </ul>
                        </CardContent>
                        <CardActions>
                            <Button fullWidth variant="outlined">
                                Get Started
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Pro
                            </Typography>
                            <Typography variant="h4" component="p" gutterBottom>
                                $10/mo
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                For power users who want to unlock more features.
                            </Typography>
                            <ul>
                                <li>Up to 20 sources per project</li>
                                <li>Advanced AI-powered learning</li>
                                <li>Priority support</li>
                            </ul>
                        </CardContent>
                        <CardActions>
                            <Button fullWidth variant="outlined">
                                Subscribe
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', border: '2px solid', borderColor: 'primary.main' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Chip label="Most Popular" color="primary" sx={{ mb: 2 }} />
                            <Typography variant="h5" component="h2" gutterBottom>
                                Plus
                            </Typography>
                            <Typography variant="h4" component="p" gutterBottom>
                                $20/mo
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                For users who need more power and early access to new features.
                            </Typography>
                            <ul>
                                <li>Unlimited sources per project</li>
                                <li>Advanced AI-powered learning</li>
                                <li>Priority support</li>
                                <li>Early access to new features</li>
                            </ul>
                        </CardContent>
                        <CardActions>
                            <Button fullWidth variant="contained">
                                Subscribe
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Professional
                            </Typography>
                            <Typography variant="h4" component="p" gutterBottom>
                                $40/mo
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                For professionals and teams who need advanced features and collaboration.
                            </Typography>
                            <ul>
                                <li>All features in Plus</li>
                                <li>Team collaboration features</li>
                                <li>Dedicated account manager</li>
                                <li>24/7 premium support</li>
                            </ul>
                        </CardContent>
                        <CardActions>
                            <Button fullWidth variant="outlined">
                                Subscribe
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Pricing;