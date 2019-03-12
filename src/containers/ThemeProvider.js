import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import blue from '@material-ui/core/colors/blue';

export const customTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue
  }
});

export const ThemeProvider = ({ children }) => (
  <MuiThemeProvider theme={customTheme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
);
