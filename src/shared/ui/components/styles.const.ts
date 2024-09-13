import { SxProps, Theme } from '@mui/material';

export const cellStyles: SxProps<Theme> = {
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottom: 'none',
  pt: 20,
  '&:hover': {
    bgcolor: 'white',
    cursor: 'text',
  },
};
