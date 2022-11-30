import { Container } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

import { LogInMene } from './AppNavigation/LogInMenu';
import { UserMenu } from './AppNavigation/UserMenu';
import { AppMenu } from './AppNavigation/AppBar';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { ParticlesLines } from '../components/Particles/Particles';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <Container disableGutters maxWidth="lg" sx={{ minHeight: '100vh' }}>
        <AppBar
          position="static"
          sx={{
            background:
              'linear-gradient(90deg, rgba(219,30,10,1) 0%, rgba(255,209,0,1) 100%)',
          }}
        >
          <Container>
            <Toolbar disableGutters>
              <AppMenu />
              {isLoggedIn ? <UserMenu /> : <LogInMene />}
            </Toolbar>
          </Container>
        </AppBar>

        <Suspense>
          <ParticlesLines />

          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
