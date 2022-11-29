import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MenuList from '@mui/material/MenuList';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { NavButton, NavLinkStyled } from './NavButton/NavButton.styled';
import MenuItem from '@mui/material/MenuItem';

export const AppMenu = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
            padding: 2,
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
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLinkStyled to="/">Home</NavLinkStyled>
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <NavLinkStyled to="/contacts">Contacts</NavLinkStyled>
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        <NavButton onClick={handleCloseNavMenu} to="/" component={NavLink}>
          Home
        </NavButton>
        <NavButton
          onClick={handleCloseNavMenu}
          to="/contacts"
          component={NavLink}
        >
          Contacts
        </NavButton>
      </Box>
    </>
  );
};
