import { TableCell, TableRow } from '@mui/material';

import { cellStyles } from './styles.const';

type NotFoundRowProps = {
  variant: 'error' | 'empty';
};
const NotFoundRow = ({ variant }: NotFoundRowProps) => {
  return (
    <TableRow sx={{ display: 'block', height: '100%' }}>
      <TableCell sx={cellStyles}>
        {variant === 'error'
          ? 'Произошла ошибка... Попробуйте позже'
          : 'Счетчики не найдены'}
      </TableCell>
    </TableRow>
  );
};

export default NotFoundRow;
