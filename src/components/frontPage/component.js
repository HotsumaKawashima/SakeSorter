import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Box    from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Zoom   from '@material-ui/core/Zoom';
import Typography from '@material-ui/core/Typography';

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

  return ( props.isPrepared &&
    <Box height='100%' display='flex' alignItems='center' justifyContent='center'>
      <Box>
        <Box display='flex' justifyContent='center'>
          <Box style={{ position: 'absolute' }}>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '100ms' : '0ms' }}>
              <SakeImage src={`./images/sakes/${props.sakes[0].image}`} style={{ left:   '30px', top: '-175px' }} />
            </Zoom>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '200ms' : '0ms' }}>
              <SakeImage src={`./images/sakes/${props.sakes[1].image}`} style={{ left:  '-85px', top: '-135px' }} />
            </Zoom>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '300ms' : '0ms' }}>
              <SakeImage src={`./images/sakes/${props.sakes[2].image}`} style={{ left: '-125px', top:  '-30px' }} />
            </Zoom>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '400ms' : '0ms' }}>
              <SakeImage src={`./images/sakes/${props.sakes[3].image}`} style={{ left:  '-85px', top:   '85px' }} />
            </Zoom>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '500ms' : '0ms' }}>
              <SakeImage src={`./images/sakes/${props.sakes[4].image}`} style={{ left:   '30px', top:  '125px' }} />
            </Zoom>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '600ms' : '0ms' }}>
              <SakeImage src={`./images/sakes/${props.sakes[5].image}`} style={{ left:  '145px', top:   '85px' }} />
            </Zoom>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '700ms' : '0ms' }}>
              <SakeImage src={`./images/sakes/${props.sakes[6].image}`} style={{ left:  '195px', top:  '-30px' }} />
            </Zoom>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '800ms' : '0ms' }}>
              <SakeImage src={`./images/sakes/${props.sakes[7].image}`} style={{ left:  '145px', top: '-135px' }} />
            </Zoom>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '1100ms' : '0ms' }}>
              <Box display='flex' justifyContent='center' alignItems='center'>
                <StartButton variant='outlined' onClick={props.onClickStartButton}>FIND YOUR SAKE</StartButton>
              </Box>
            </Zoom>
          </Box>
        </Box>
        <Box>
          <Box>
            <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '1400ms' : '0ms' }}>
              <Box pt={32}>
                <Box>
                  <Typography align='center'>Find your special ranking after comparing sakes.</Typography>
                </Box>
                <Box>
                  <Typography align='center'>Have fun!! (≧∇≦)b</Typography>
                </Box>
              </Box>
            </Zoom>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
