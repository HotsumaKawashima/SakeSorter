import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Box    from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

const StartButton = withStyles({
  root: {
    border: '1px solid #eee',
    color:  '#000',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const SakeImage = withStyles({
  root: {
    border: '1px solid #eee',
    padding: '10px',
    width:  '90px',
    height: '90px',
    position: 'absolute',
  }
})(Avatar);

export default function SortPage(props) {
  return (
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <Box style={{ position: 'relative' }}>
        <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:   '30px', top: '-175px' }} />
        <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '145px', top: '-135px' }} />
        <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '-85px', top: '-135px' }} />
        <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '195px', top:  '-30px' }} />
        <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left: '-125px', top:  '-30px' }} />
        <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '-85px', top:   '85px' }} />
        <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '145px', top:   '85px' }} />
        <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:   '30px', top:  '125px' }} />
        <Box display='flex' justifyContent='center' alignItems='center'>
          <StartButton variant='outlined'>FIND YOUR SAKE</StartButton>
        </Box>
      </Box>
    </Box>
  )
}
