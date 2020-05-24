import React from 'react';

import './style.css';

import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
        <Box>
          <img src='/images/villagers/Admiral.png' />
        </Box>
      </Box>
    </React.Fragment>
  )
}
