import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Box        from '@material-ui/core/Box';
import Button     from '@material-ui/core/Button';
import Avatar     from '@material-ui/core/Avatar';
import Zoom       from '@material-ui/core/Zoom';
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
  }
})(Avatar);

export default function ResultPage(props) {

  useEffect(() => {
    props.onLoadPage()
  }, [])

  return ( props.isPrepared &&
    <Box m={15} display='flex' justifyContent='center'>
        <Box>
          <Zoom in={props.isOpen} style={{ transitionDelay: props.isOpen ? '100ms' : '0ms' }}>
            <Box mb={10}>
              <Typography align='center'>Your chace !!</Typography>
            </Box>
          </Zoom>
          { props.sakes.map((sake, index) =>
            <Zoom key={sake.id} in={props.isOpen} style={{ transitionDelay: props.isOpen ? '100ms' : '0ms' }}>
              <Box mt={5}>
                <Box display='flex' justifyContent='center'>
                  <SakeImage src={`./images/sakes/${sake.image}`}/>
                </Box>
                <Box mt={1}>
                  <Typography align='center'>{`${index+1}. ${sake.name}`}</Typography>
                </Box>
              </Box>
            </Zoom>
          ) }
        </Box>
    </Box>
  )
}
