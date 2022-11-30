import { Container, CssBaseline, Box, Typography, Grid } from '@mui/material';
import { NavButton } from 'components/AppNavigation/NavButton/NavButton.styled';
import { NavLink } from 'react-router-dom';
const PageNotFound = () => {
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
          Sorry. Page not Found!
        </Typography>
        <Grid
          container
          gap={2}
          sx={{
            backgroundColor: 'primary.light',
            padding: 2,
            borderRadius: 2,
            width: 'auto',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <NavButton variant="contained" to="/" component={NavLink}>
            Home
          </NavButton>
          <NavButton variant="contained" to="/contacts" component={NavLink}>
            Contacts
          </NavButton>
        </Grid>
      </Box>
    </Container>
  );
};

export default PageNotFound;
