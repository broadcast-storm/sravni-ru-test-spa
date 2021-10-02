import axios, { AxiosResponse } from 'axios';

import { IIpoteka } from '../models/IIpoteka';

interface params {
  term?: number;
  purpose?: string;
  sortByAmount?: boolean;
}

export default class IpotekaService {
  static async getIpotekaList(
    dataPart: number,
    params?: params,
  ): Promise<AxiosResponse<{ items: IIpoteka[]; total: number }>> {
    return axios.get<{ items: IIpoteka[]; total: number }>(
      'http://localhost:4000/api/data/',
      {
        params: {
          dataPart,
          ...params,
        },
      },
    );
  }
  static async getIpotekaDetails(id: string): Promise<AxiosResponse<IIpoteka>> {
    return axios.get<IIpoteka>(`http://localhost:4000/api/data/${id}`);
  }
}
