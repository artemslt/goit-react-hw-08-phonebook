import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';

import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { NavButton } from './NavButton/NavButton.styled';
import { IconButton, Menu, MenuItem, MenuList } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useState } from 'react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton onClick={handleOpenNavMenu} color="inherit">
          <AccountBoxIcon />
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
            <MenuItem>
              <Typography textAlign="center">{user.name}</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Button onClick={handleLogOut}>Log Out</Button>
              </Typography>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box
        sx={{
          flexGrow: 0,
          alignItems: 'center',
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Typography textAlign="center">{user.name}</Typography>
        <NavButton onClick={handleLogOut}>Log Out</NavButton>
      </Box>
    </>
  );
};
