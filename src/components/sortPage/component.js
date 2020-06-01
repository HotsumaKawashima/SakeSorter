import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import Box        from '@material-ui/core/Box';
import Button     from '@material-ui/core/Button';
import Avatar     from '@material-ui/core/Avatar';
import Zoom       from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';

const SakeImage = withStyles({
  root: {
    border: '1px solid #eee',
    padding: '0px',
    width:  '400px',
    height: '400px',
  }
})(Avatar);

export default function SortPage(props) {
  return (
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <Box>
        <Box height={50} display='flex' justifyContent='center' alignItems='center'>
          <Zoom in={true} style={{ transitionDelay: true ? '100ms' : '0ms' }}>
            <Typography>Which do you like?</Typography>
          </Zoom>
        </Box>
        <Box display='flex'>
          <Box>
            <Zoom in={true} style={{ transitionDelay: true ? '100ms' : '0ms' }}>
              <SakeImage src='./images/sakes/aiyama720_800.jpg'/>
            </Zoom>
          </Box>
          <Box ml={3}>
            <Zoom in={true} style={{ transitionDelay: true ? '100ms' : '0ms' }}>
              <SakeImage src='./images/sakes/aiyama720_800.jpg'/>
            </Zoom>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
