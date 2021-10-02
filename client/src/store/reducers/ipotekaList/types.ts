import { IIpoteka } from '../../../models/IIpoteka';

export interface IpotekasState {
  items: IIpoteka[];
  total: number;
  isLoading: boolean;
  isLoadingMore: boolean;
  error: string;
}

export enum IpotekasActionsEnum {
  SET_ITEMS = 'SET_ITEMS',
  SET_ERROR = 'SET_ERROR',
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_IS_LOADING_MORE = 'SET_IS_LOADING_MORE',
}

export interface SetErrorAction {
  type: IpotekasActionsEnum.SET_ERROR;
  payload: string;
}

export interface SetIpotekasAction {
  type: IpotekasActionsEnum.SET_ITEMS;
  payload: { items: IIpoteka[]; total: number; rewriteItems: boolean };
}

export interface SetIsLoadingAction {
  type: IpotekasActionsEnum.SET_IS_LOADING;
  payload: boolean;
}

export interface SetIsLoadingMoreAction {
  type: IpotekasActionsEnum.SET_IS_LOADING_MORE;
  payload: boolean;
}

export type IpotekasAction =
  | SetErrorAction
  | SetIpotekasAction
  | SetIsLoadingAction
  | SetIsLoadingMoreAction;
