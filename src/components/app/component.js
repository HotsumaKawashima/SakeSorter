import React from 'react';

import './style.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

import Router from '../router';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router />
    </React.Fragment>
  )
}
