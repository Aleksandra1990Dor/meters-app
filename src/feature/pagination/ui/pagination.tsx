import { Pagination, Stack } from '@mui/material';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/shared';

import { paginationStyles } from '../shared/const/const';

const MeterPagination = observer(() => {
  const { pagination } = useStore();

  return (
    <Stack sx={paginationStyles}>
      <Pagination
        count={pagination.count}
        page={pagination.page}
        onChange={(_, page) => pagination.setPage(page)}
        variant="outlined"
        shape="rounded"
        hideNextButton
        hidePrevButton
      />
    </Stack>
  );
});

export default MeterPagination;
