import { Box, TableCell, TableRow } from '@mui/material';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { cellStyles } from './styles.const';

const Loader = () => {
  return (
    <TableRow sx={{ display: 'block', height: '100%' }}>
      <TableCell sx={cellStyles}>
        <Box
          sx={{
            height: '60px',
            animation: 'loading 1s linear infinite',
          }}
        >
          <AiOutlineLoading3Quarters size={'60px'} fill={'#e0e5eb'} />
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default Loader;
