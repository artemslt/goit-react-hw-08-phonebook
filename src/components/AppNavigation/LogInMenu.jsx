import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { NavButton, NavLinkStyled } from './NavButton/NavButton.styled';
import MenuItem from '@mui/material/MenuItem';
import { MenuList } from '@mui/material';

export const LogInMene = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <IconButton onClick={handleOpenNavMenu} color="inherit">
          <AppRegistrationIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          <MenuList
            sx={{
              display: 'flex',
              gap: 4,
              flexDirection: 'column',
              padding: 2,
            }}
          >
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ textDecoration: 'none' }}
            >
              <Typography textAlign="center">
                <NavLinkStyled to="/registration">Registration</NavLinkStyled>
              </Typography>
            </MenuItem>
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{ textDecoration: 'none' }}
            >
              <Typography textAlign="center">
                <NavLinkStyled to="login">Log In</NavLinkStyled>
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
        <NavButton
          onClick={handleCloseNavMenu}
          component={NavLink}
          to="/registration"
        >
          Registration
        </NavButton>
        <NavButton onClick={handleCloseNavMenu} component={NavLink} to="/login">
          Log In
        </NavButton>
      </Box>
    </>
  );
};
