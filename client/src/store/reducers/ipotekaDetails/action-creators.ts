import IpotekaService from '../../../api/IpotekaService';
import { IIpoteka } from '../../../models/IIpoteka';
import { AppDispatch } from '../..';
import {
  IpotekaDetailsActionsEnum,
  SetErrorAction,
  SetIpotekaDetailsAction,
  SetIsLoadingAction,
} from './types';

export const IpotekaDetailsActionCreators = {
  setIpotekaDetails: (payload: IIpoteka): SetIpotekaDetailsAction => ({
    type: IpotekaDetailsActionsEnum.SET_DETAILS,
    payload,
  }),
  setIsLoading: (payload: boolean): SetIsLoadingAction => ({
    type: IpotekaDetailsActionsEnum.SET_IS_DETAILS_LOADING,
    payload,
  }),
  setError: (error: string): SetErrorAction => ({
    type: IpotekaDetailsActionsEnum.SET_ERROR_DETAILS,
    payload: error,
  }),
  fetchIpotekaDetails: (id: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(IpotekaDetailsActionCreators.setIsLoading(true));
      const response = await IpotekaService.getIpotekaDetails(id);
      dispatch(IpotekaDetailsActionCreators.setIpotekaDetails(response.data));
      dispatch(IpotekaDetailsActionCreators.setIsLoading(false));
    } catch (error) {
      dispatch(IpotekaDetailsActionCreators.setError('Ошибка получения данных'));
    }
  },
};
