import { AddressResponse } from '@/shared';

export const getAddressValue = (address?: AddressResponse) => {
  if (!address) return '-';

  const streetAndHouse = address.house.address.split(',').splice(1).join(',');

  return `${streetAndHouse}, ${address.str_number_full}`;
};
