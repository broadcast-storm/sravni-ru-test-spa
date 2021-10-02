import { IpotekaDetailsActionCreators } from './ipotekaDetails/action-creators';
import { IpotekasActionCreators } from './ipotekaList/action-creators';

export const allActionCreators = {
  ...IpotekasActionCreators,
  ...IpotekaDetailsActionCreators,
};
