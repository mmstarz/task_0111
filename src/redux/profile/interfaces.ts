import types from 'redux/constants';
import { IProfile } from 'common/interfaces';
import { ICommonDataState, ICriteria } from 'redux/common/interfaces';

/* STATE TYPES */
export interface IProfileState extends ICommonDataState {
  data: IProfile | {};
}

/* PAYLOAD TYPES */
type ProfileData = Pick<IProfileState, 'data'>;
type ProfileError = Pick<IProfileState, 'error'>;
type ProfileStatus = Pick<IProfileState, 'isError'>;
type ProfileLoading = Pick<IProfileState, 'isLoading'>;

export type ProfilePayload =
  | ProfileData
  | ProfileError
  | ProfileStatus
  | ProfileLoading
  | ICriteria
  | null;

/* ACTIONS TYPES */

type ProfileActionsTypes = typeof types.SET_PROFILE;

export type ProfileActions = {
  type: ProfileActionsTypes;
  payload?: ProfilePayload;
};
