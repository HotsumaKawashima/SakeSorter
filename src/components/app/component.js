import React from 'react';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import Router from '../router';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Cutive Mono',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': {
          fontFamily: 'Cutive Mono',
          src: `url('./font/CutiveMono-Regular.ttf') format('truetype')`
        },
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          margin: '0',
          backgroundColor: '#FFF',
        },
        '#root': {
          height: '100%',
        }
      },
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}
