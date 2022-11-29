import { Container, CssBaseline, Box, Typography } from '@mui/material';
const Home = () => {
  return (
    <Container component="main">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h4">
          This App was created to facilitate the storage of contacts.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
