import { Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

import { AddressResponse, ColdWaterIcon, HotWaterIcon, Meter } from '@/shared';

import { TableColls } from '../types/table.types';
import { getAddressValue } from './get-address-value';

export const getCellValue = (
  row: Meter,
  key: TableColls,
  count: number,
  address?: AddressResponse
) => {
  switch (key) {
    case 'count':
      return count;

    case 'type':
      return row._type[0] === 'ColdWaterAreaMeter' ? (
        <Stack direction={'row'} spacing={2}>
          <ColdWaterIcon />
          <Typography variant="body2">ХВС</Typography>
        </Stack>
      ) : (
        <Stack direction={'row'} spacing={2}>
          <HotWaterIcon /> <Typography variant="body2">ГВС</Typography>
        </Stack>
      );

    case 'installation_date':
      return dayjs(row.installation_date).format('DD.MM.YYYY');

    case 'is_automatic':
      return row.is_automatic ? 'да' : 'нет';

    case 'initial_values':
      return row.initial_values.join('.');

    case 'area':
      return getAddressValue(address);

    case 'description':
      return row.description || '-';
  }
};
