import { Table, TableCell, TableHead, TableRow } from '@mui/material';

import { tableHeadColls } from '../shared/consts/table.const';
import { getMinCellWidth } from '../shared/helpers/get-min-cell-width';
import { TableColls } from '../shared/types/table.types';

const MeterTableHead = () => {
  return (
    <Table>
      <TableHead>
        <TableRow sx={{ bgcolor: 'var(--gray-header)' }}>
          {Object.entries(tableHeadColls).map(([key, heading]) => (
            <TableCell
              sx={{
                width: getMinCellWidth(key as TableColls),
              }}
              key={heading}
              variant="head"
            >
              {heading}
            </TableCell>
          ))}
          <TableCell sx={{ width: '106px' }} variant="head"></TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default MeterTableHead;
