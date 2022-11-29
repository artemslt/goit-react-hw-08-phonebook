const { createTheme } = require('@mui/material');

export const theme = createTheme({
  palette: {
    primary: {
      light: '#ff7d4755',
      main: '#e64a19',
      dark: '#ac0800',
      contrastText: '#000',
    },
    secondary: {
      light: '#9c786c',
      main: '#6d4c41',
      dark: '#40241a',
      contrastText: '#fff',
    },
  },
});
