import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Box    from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
  root: {
    border: '1px solid #eee',
    color: '#000',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function SortPage(props) {
  return (
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <Box>
        <Box height={50} display='flex' justifyContent='center' alignItems='center'>
          <StyledButton variant='outlined'>FIND YOUR SAKE</StyledButton>
        </Box>
      </Box>
    </Box>
  )
}
