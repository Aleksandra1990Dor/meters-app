import { TableColls } from '../types/table.types';

export const getMinCellWidth = (key: TableColls) =>
  ({
    count: 48,
    type: 120,
    installation_date: 160,
    is_automatic: 140,
    initial_values: 176,
    area: 'auto',
    description: 350,
  })[key];
