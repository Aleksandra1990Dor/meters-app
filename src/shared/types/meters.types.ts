type MeterArea = {
  id: string;
};

export type Meter = {
  id: string;
  _type: string[];
  area: MeterArea;
  installation_date: string;
  is_automatic: boolean;
  initial_values: number[];
  description: string;
};

export type MetersResponse = {
  count: number;
  next: string;
  previous: string;
  results: Meter[];
};
