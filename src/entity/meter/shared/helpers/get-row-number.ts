export const getRowNumber = (page: number, index: number) => {
  const totalItemsInPrevRows = page === 1 ? 0 : (page - 1) * 20;
  const numberInThisRow = index + 1;

  return totalItemsInPrevRows + numberInThisRow;
};
