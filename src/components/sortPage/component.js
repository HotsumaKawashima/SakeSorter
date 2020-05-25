import React from 'react';

import Box from '@material-ui/core/Box';

export default function SortPage(props) {
  return (
    <Box height='100%' display='flex' justifyContent='center' alignItems='center'>
      <Box>
        <Box display='flex'>
          <Box>
            <img src='/images/villagers/Admiral.png' onClick={ () => props.onSelectVillager('id') } />
          </Box>
          <Box ml={6}>
            <img src='/images/villagers/Agent_S.png' onClick={ () => props.onSelectVillager('id') } />
          </Box>
        </Box>
        <Box height={50} display='flex' justifyContent='center' alignItems='center'>
          test
        </Box>
      </Box>
    </Box>
  )
}
