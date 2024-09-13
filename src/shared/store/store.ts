import { types } from 'mobx-state-tree';

const PaginationStore = types
  .model('PaginationStore', {
    count: types.number,
    limit: types.number,
    page: types.number,
    offset: types.number,
  })
  .actions((self) => {
    return {
      setPage: (page: number) => {
        self.page = page;
        self.offset = page * 10;
      },
      setCount: (count: number) => {
        self.count = count;
      },
    };
  });

const RootStore = types.model('RootStore', {
  pagination: PaginationStore,
});

const store = RootStore.create({
  pagination: {
    count: 1,
    limit: 20,
    page: 1,
    offset: 10,
  },
});

export default store;
