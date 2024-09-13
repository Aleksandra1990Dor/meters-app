export { default as mainApi } from './api/main.api';
export { default as useStore } from './hooks/use-store';
export { StoreContext } from './providers/store.provider';
export { default as store } from './store/store';

// consts
export { queryClient } from './const/guery-client.const';
export { theme } from './const/theme.const';

// types
export type { AddressResponse } from './types/address.types';
export type { Meter, MetersResponse } from './types/meters.types';

// icons
export { default as ColdWaterIcon } from './ui/icons/cold-water-icon';
export { default as HotWaterIcon } from './ui/icons/hot-water-icon';
export { default as TrashIcon } from './ui/icons/trash';

// components
export { default as Loader } from './ui/components/loader';
export { default as NotFoundRow } from './ui/components/not-found-row';
