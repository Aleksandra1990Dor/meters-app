import { Stack } from '@mui/material';

import { MeterTableBody, MeterTableHead } from '@/entity/meter';
import { DeleteButton, MeterPagination } from '@/feature';

import { tableWidgetStyles } from '../shared/const';

const TableWidget = () => {
  return (
    <Stack sx={tableWidgetStyles}>
      <MeterTableHead />
      <MeterTableBody DeleteFeature={DeleteButton} />
      <MeterPagination />
    </Stack>
  );
};

export default TableWidget;
