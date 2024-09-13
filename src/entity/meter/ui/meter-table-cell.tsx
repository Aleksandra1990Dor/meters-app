import { TableCell } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

import { mainApi, Meter } from '@/shared';

import { staleTime } from '../shared/consts/request-cashe-time.const';
import { getCellValue } from '../shared/helpers/get-cell-value';
import { getMinCellWidth } from '../shared/helpers/get-min-cell-width';
import { TableColls } from '../shared/types/table.types';

type MeterTableCellProps = {
  row: Meter;
  count: number;
  cellKey: TableColls;
};

const MeterTableCell = (props: MeterTableCellProps) => {
  const { count, row, cellKey } = props;
  const isGrayCell = cellKey === 'description' || cellKey === 'count';

  const { data } = useQuery({
    queryKey: ['getAddressById'],
    queryFn: () => mainApi.getAddressById(row.area.id),
    staleTime,
    enabled: cellKey !== 'area',
  });

  return (
    <TableCell
      sx={{
        width: getMinCellWidth(cellKey),
        color: isGrayCell ? 'var(--text-light)' : undefined,
      }}
    >
      {getCellValue(row, cellKey, count, data)}
    </TableCell>
  );
};

export default MeterTableCell;
