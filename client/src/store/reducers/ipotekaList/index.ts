import { IpotekasAction, IpotekasActionsEnum, IpotekasState } from './types';

const initialState: IpotekasState = {
  error: '',
  isLoading: true,
  isLoadingMore: false,
  items: [],
  total: 0,
};

export default function ipotekaListReducer(
  state = initialState,
  action: IpotekasAction,
): IpotekasState {
  switch (action.type) {
    case IpotekasActionsEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload, error: '' };
    case IpotekasActionsEnum.SET_IS_LOADING_MORE:
      return { ...state, isLoadingMore: action.payload };
    case IpotekasActionsEnum.SET_ERROR:
      return {
        ...state,
        items: [],
        error: action.payload,
        isLoading: false,
        isLoadingMore: false,
      };
    case IpotekasActionsEnum.SET_ITEMS:
      return {
        ...state,
        items: action.payload.rewriteItems
          ? action.payload.items
          : [...state.items, ...action.payload.items],
        total: action.payload.total,
      };
    case IpotekasActionsEnum.CLEAR_LIST_STATE:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
