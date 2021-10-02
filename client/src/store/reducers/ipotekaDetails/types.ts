import { IIpoteka } from '../../../models/IIpoteka';

export interface IpotekaDetailsState {
  details: IIpoteka | null;
  isLoading: boolean;
  errorDetails: string;
}

export enum IpotekaDetailsActionsEnum {
  SET_DETAILS = 'SET_DETAILS',
  SET_ERROR_DETAILS = 'SET_ERROR_DETAILS',
  SET_IS_DETAILS_LOADING = 'SET_IS_DETAILS_LOADING',
}

export interface SetErrorAction {
  type: IpotekaDetailsActionsEnum.SET_ERROR_DETAILS;
  payload: string;
}

export interface SetIpotekaDetailsAction {
  type: IpotekaDetailsActionsEnum.SET_DETAILS;
  payload: IIpoteka;
}

export interface SetIsLoadingAction {
  type: IpotekaDetailsActionsEnum.SET_IS_DETAILS_LOADING;
  payload: boolean;
}

export type IpotekaDetailsAction =
  | SetErrorAction
  | SetIpotekaDetailsAction
  | SetIsLoadingAction;
