import React, { useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';

import { ShakeLittle } from 'reshake';

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

  useEffect(() => {
    props.onLoadPage()
  }, [])

  return ( props.isPrepared &&
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <Box>
        <Box mb={5} display='flex' justifyContent='center' alignItems='center'>
          <Zoom in={props.isOpen}>
            <Typography>Which do you like?</Typography>
          </Zoom>
        </Box>
        <Box display='flex'>
          <Box>
            <Zoom in={props.isOpen && props.openSake}>
              <SakeImage src={`./images/sakes/${props.leftSake.image}`} onClick={() => props.onClickSake(props.leftSake)}/>
            </Zoom>
          </Box>
          <Box ml={3}>
            <Zoom in={props.isOpen && props.openSake}>
              <SakeImage src={`./images/sakes/${props.rightSake.image}`} onClick={() => props.onClickSake(props.rightSake)}/>
            </Zoom>
          </Box>
        </Box>
        <Box mt={5} display='flex' justifyContent='center' alignItems='center'>
          <Zoom in={props.isOpen}>
            <Typography>{`${props.progress} %`}</Typography>
          </Zoom>
        </Box>
      </Box>
    </Box>
  )
}
