import { SxProps, Theme } from '@mui/material';

export const paginationStyles: SxProps<Theme> = {
  p: '8px 16px',
  borderTop: '1px solid var(--gray)',
  '& ul': { justifyContent: 'end' },
};
