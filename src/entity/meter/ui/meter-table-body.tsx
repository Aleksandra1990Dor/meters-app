import { Card, Table, TableBody } from '@mui/material';
import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';

import { DeleteButtonProps } from '@/feature';
import { Loader, mainApi, NotFoundRow, useStore } from '@/shared';

import { staleTime } from '../shared/consts/request-cashe-time.const';
import { getRowNumber } from '../shared/helpers/get-row-number';
import MeterTableRow from './meter-table-row';

type MeterTableBodyProps = {
  DeleteFeature: (props: DeleteButtonProps) => JSX.Element;
};

const MeterTableBody = observer((props: MeterTableBodyProps) => {
  const { DeleteFeature } = props;

  const { pagination } = useStore();
  const tableRef = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['getAllMeters', pagination.offset, pagination.limit],
    queryFn: () =>
      mainApi.getAllMeters({
        limit: pagination.limit,
        offset: pagination.offset,
      }),
    staleTime,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    if (data?.count && pagination.count !== data.count) {
      pagination.setCount(Math.ceil(data.count / 20));
    }
  }, [data?.count, pagination.count]);

  useEffect(() => {
    tableRef.current?.scrollTo(0, 0);
  }, [pagination.page]);

  const shouldRenderData = isSuccess && !isLoading && !!data?.results?.length;
  const isEmptyData = isSuccess && !isLoading && !data?.results?.length;

  return (
    <Card ref={tableRef}>
      <Table sx={{ tableLayout: 'fixed' }}>
        <TableBody>
          {isLoading && <Loader />}
          {shouldRenderData &&
            data?.results?.map((row, index) => (
              <MeterTableRow
                key={row.id}
                row={row}
                count={getRowNumber(pagination.page, index)}
                DeleteFeature={DeleteFeature}
              />
            ))}
          {isEmptyData && <NotFoundRow variant="error" />}
          {isError && <NotFoundRow variant="error" />}
        </TableBody>
      </Table>
    </Card>
  );
});

export default MeterTableBody;
