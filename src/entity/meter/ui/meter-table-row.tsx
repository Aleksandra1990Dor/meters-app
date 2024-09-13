import { TableRow } from '@mui/material';

import { DeleteButtonProps } from '@/feature';
import { Meter } from '@/shared';

import { tableHeadColls } from '../shared/consts/table.const';
import { TableColls } from '../shared/types/table.types';
import MeterTableCell from './meter-table-cell';

type MeterTableRowProps = {
  row: Meter;
  count: number;
  DeleteFeature: (props: DeleteButtonProps) => JSX.Element;
};

const MeterTableRow = (props: MeterTableRowProps) => {
  const { row, count, DeleteFeature } = props;

  return (
    <TableRow key={row.id}>
      {Object.keys(tableHeadColls).map((key) => (
        <MeterTableCell
          count={count}
          key={key}
          cellKey={key as TableColls}
          row={row}
        />
      ))}
      <DeleteFeature meterId={row.id} />
    </TableRow>
  );
};

export default MeterTableRow;
