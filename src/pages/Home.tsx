import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import useStore from '../store';
import {
  Container,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Box,
  Grid,
  InputAdornment,
  Chip,
} from '@mui/material';
import {
    Link,
    ChildCare,
    School,
    MenuBook,
    HistoryEdu,
    Style,
    Slideshow,
    Podcasts,
    YouTube,
    Audiotrack,
    Videocam,
    Article,
    Add as AddIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const {
    sources,
    difficulty,
    outputFormat,
    addSource,
    removeSource,
    setDifficulty,
    setOutputFormat,
  } = useStore();
  const [currentSource, setCurrentSource] = useState('');

  const handleAddSource = () => {
    if (currentSource.trim() !== '') {
      addSource(currentSource.trim());
      setCurrentSource('');
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/results');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container sx={{ flexGrow: 1, my: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to LearnEasy
            </Typography>
            <Typography variant="h5" component="p" color="text.secondary">
                The easiest way to understand complex topics. Simply enter a source, select your desired difficulty and output format, and let us do the rest!
            </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <TextField
                            label="Enter URL, text, or upload a file"
                            variant="outlined"
                            value={currentSource}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setCurrentSource(e.target.value)}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Link />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <Button onClick={handleAddSource} variant="contained" endIcon={<AddIcon/>}>
                                            Add
                                        </Button>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1}}>
                        {sources.map((source) => (
                            <Chip
                                key={source}
                                label={source}
                                onDelete={() => removeSource(source)}
                            />
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Difficulty Level</InputLabel>
                        <Select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        label="Difficulty Level"
                        >
                            <MenuItem value="child"><ChildCare sx={{mr: 1}}/>5-year-old child</MenuItem>
                            <MenuItem value="high-school"><School sx={{mr: 1}}/>High school student</MenuItem>
                            <MenuItem value="undergraduate"><MenuBook sx={{mr: 1}}/>Undergraduate student</MenuItem>
                            <MenuItem value="post-graduate"><HistoryEdu sx={{mr: 1}}/>Post-graduate</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <FormControl fullWidth>
                        <InputLabel>Output Format</InputLabel>
                        <Select
                        value={outputFormat}
                        onChange={(e) => setOutputFormat(e.target.value)}
                        label="Output Format"
                        >
                            <MenuItem value="flashcards"><Style sx={{mr: 1}}/>Flashcards</MenuItem>
                            <MenuItem value="slides"><Slideshow sx={{mr: 1}}/>PowerPoint slides</MenuItem>
                            <MenuItem value="podcast"><Podcasts sx={{mr: 1}}/>Podcast</MenuItem>
                            <MenuItem value="youtube"><YouTube sx={{mr: 1}}/>YouTube video</MenuItem>
                            <MenuItem value="audio"><Audiotrack sx={{mr: 1}}/>Audio overview</MenuItem>
                            <MenuItem value="video"><Videocam sx={{mr: 1}}/>Video overview</MenuItem>
                            <MenuItem value="report"><Article sx={{mr: 1}}/>Report</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
                        Generate
                    </Button>
                </Grid>
            </Grid>
        </form>
      </Container>
      <Footer />
    </Box>
  );
}

export default Home;
