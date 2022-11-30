import { Button, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const NavButton = styled(Button)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.primary,
  display: 'block',
  position: 'relative',

  '&:hover': {
    color: theme.palette.secondary.contrastText,

    backgroundColor: theme.palette.action.hover,
  },
  '&.active': {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.action.active,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.contrastText,
    },
  },
}));

export const NavLinkStyled = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.contrastText,

  '&:hover': {
    color: theme.palette.secondary.dark,

    backgroundColor: theme.palette.action.hover,
  },
  '&.active': {
    color: theme.palette.primary.dark,
    borderBottom: '1px solid',

    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));
