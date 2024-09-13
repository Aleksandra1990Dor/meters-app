import { IconButton, TableCell } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { mainApi, TrashIcon } from '@/shared';

export type DeleteButtonProps = {
  meterId: string;
};
const DeleteButton = (props: DeleteButtonProps) => {
  const { meterId } = props;
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => mainApi.deleteMeterById(id),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['getAllMeters'] }),
  });

  return (
    <TableCell sx={{ width: '100px', textAlign: 'right' }} variant="body">
      <IconButton disabled={isPending} onClick={() => mutate(meterId)}>
        <TrashIcon />
      </IconButton>
    </TableCell>
  );
};

export default DeleteButton;
