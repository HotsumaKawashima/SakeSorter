import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Box    from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Zoom   from '@material-ui/core/Zoom';

const StartButton = withStyles({
  root: {
    border: '0px solid #eee',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const SakeImage = withStyles({
  root: {
    border: '1px solid #eee',
    padding: '0px',
    width:  '90px',
    height: '90px',
    position: 'absolute',
  }
})(Avatar);

export default function SortPage(props) {

  useEffect(() => {
    props.onLoadPage()
  }, [])

  return (
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <Box style={{ position: 'relative' }}>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '100ms' : '0ms' }}>
          <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:   '30px', top: '-175px' }} />
        </Zoom>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '200ms' : '0ms' }}>
          <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '-85px', top: '-135px' }} />
        </Zoom>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '300ms' : '0ms' }}>
          <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left: '-125px', top:  '-30px' }} />
        </Zoom>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '400ms' : '0ms' }}>
          <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '-85px', top:   '85px' }} />
        </Zoom>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '500ms' : '0ms' }}>
          <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:   '30px', top:  '125px' }} />
        </Zoom>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '600ms' : '0ms' }}>
          <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '145px', top:   '85px' }} />
        </Zoom>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '700ms' : '0ms' }}>
          <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '195px', top:  '-30px' }} />
        </Zoom>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '800ms' : '0ms' }}>
          <SakeImage src='./images/sakes/aiyama720_800.jpg' style={{ left:  '145px', top: '-135px' }} />
        </Zoom>
        <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '1100ms' : '0ms' }}>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <StartButton variant='outlined' onClick={props.onClickStartButton}>FIND YOUR SAKE</StartButton>
          </Box>
        </Zoom>
      </Box>
    </Box>
  )
}
