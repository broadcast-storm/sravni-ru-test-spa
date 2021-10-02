import {
  IpotekaDetailsAction,
  IpotekaDetailsActionsEnum,
  IpotekaDetailsState,
} from './types';

const initialState: IpotekaDetailsState = {
  errorDetails: '',
  isLoading: false,
  details: null,
};

export default function ipotekaDetailsReducer(
  state = initialState,
  action: IpotekaDetailsAction,
): IpotekaDetailsState {
  switch (action.type) {
    case IpotekaDetailsActionsEnum.SET_IS_DETAILS_LOADING:
      return { ...state, isLoading: action.payload };
    case IpotekaDetailsActionsEnum.SET_ERROR_DETAILS:
      return { ...state, errorDetails: action.payload, isLoading: false };
    case IpotekaDetailsActionsEnum.SET_DETAILS:
      return { ...state, details: action.payload };
    default:
      return state;
  }
}
