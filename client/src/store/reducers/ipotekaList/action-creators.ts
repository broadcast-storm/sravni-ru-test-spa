import IpotekaService from '../../../api/IpotekaService';
import { IIpoteka } from '../../../models/IIpoteka';
import { AppDispatch } from '../..';
import {
  IpotekasActionsEnum,
  SetErrorAction,
  SetIpotekasAction,
  SetIsLoadingAction,
  SetIsLoadingMoreAction,
} from './types';

export const IpotekasActionCreators = {
  setIpotekaList: (payload: {
    items: IIpoteka[];
    total: number;
    rewriteItems: boolean;
  }): SetIpotekasAction => ({
    type: IpotekasActionsEnum.SET_ITEMS,
    payload,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: IpotekasActionsEnum.SET_IS_LOADING,
    payload,
  }),
  setIsLoadingMore: (payload: boolean): SetIsLoadingMoreAction => ({
    type: IpotekasActionsEnum.SET_IS_LOADING_MORE,
    payload,
  }),
  setError: (error: string): SetErrorAction => ({
    type: IpotekasActionsEnum.SET_ERROR,
    payload: error,
  }),
  fetchIpotekaList:
    (
      dataPart: number = 0,
      rewriteItems: boolean = false,
      params?: {
        term?: number;
        purpose?: string;
        sortByAmount?: boolean;
      },
    ) =>
    async (dispatch: AppDispatch) => {
      try {
        if (dataPart) dispatch(IpotekasActionCreators.setIsLoadingMore(true));
        else dispatch(IpotekasActionCreators.setIsLoading(true));
        const response = await IpotekaService.getIpotekaList(dataPart, params);
        dispatch(
          IpotekasActionCreators.setIpotekaList({ ...response.data, rewriteItems }),
        );
        if (dataPart) dispatch(IpotekasActionCreators.setIsLoadingMore(false));
        else dispatch(IpotekasActionCreators.setIsLoading(false));
      } catch (error) {
        dispatch(
          IpotekasActionCreators.setError(
            'Ошибка получения данных. Проверьте подключение к интернету',
          ),
        );
      }
    },
};
