import { Stack, Typography } from '@mui/material';

import { TableWidget } from '@/widget';

const MainPage = () => {
  return (
    <Stack p={2} spacing={2}>
      <Typography variant="h1">Список счётчиков</Typography>
      <TableWidget />
    </Stack>
  );
};

export default MainPage;
