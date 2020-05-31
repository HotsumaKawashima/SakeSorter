import React from 'react';

import Box from '@material-ui/core/Box';

export default function SortPage(props) {
  return (
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <Box>
        <Box display='flex'>
          <Box>
            <img src='/images/sakes/aiyama720_800.jpg' onClick={ () => props.onSelectVillager('id') } />
          </Box>
          <Box ml={6}>
            <img src='/images/sakes/alpha3_800.jpg' onClick={ () => props.onSelectVillager('id') } />
          </Box>
        </Box>
        <Box height={50} display='flex' justifyContent='center' alignItems='center'>
          test
        </Box>
      </Box>
    </Box>
  )
}
