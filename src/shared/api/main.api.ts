import { AddressResponse } from '../types/address.types';
import { MetersResponse } from '../types/meters.types';
import { axiosClassic } from './api.interceptor';

type Params = {
  limit: number;
  offset: number;
};

class MainApi {
  async getAllMeters(params: Params) {
    const response = await axiosClassic.get<MetersResponse>('meters/', {
      params,
    });

    return response.data;
  }

  async getAddressById(id: string) {
    const response = await axiosClassic.get<AddressResponse>(`areas/${id}`);

    return response.data;
  }

  async deleteMeterById(id: string) {
    const response = await axiosClassic.delete(`meters/${id}`);

    return response.data;
  }
}

const mainApi = new MainApi();

export default mainApi;
