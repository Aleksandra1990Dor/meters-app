import { useContext } from 'react';

import { StoreContext } from '../providers/store.provider';

function useStore() {
  return useContext(StoreContext);
}

export default useStore;
