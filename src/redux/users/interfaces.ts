import types from 'redux/constants';
import { IUser } from 'common/interfaces';
import { ICommonListOptions, ICommonListState } from 'redux/common/interfaces';

/* STATE TYPES */
export interface UsersState extends ICommonListState {
  data: IUser[];
}

/* PAYLOAD TYPES */
type UsersData = Pick<UsersState, 'data'>;
type UsersError = Pick<UsersState, 'error'>;
type UsersStatus = Pick<UsersState, 'isError'>;
type UsersLoading = Pick<UsersState, 'isLoading'>;

export type UsersPayload =
  | UsersData
  | UsersError
  | UsersStatus
  | UsersLoading
  | ICommonListOptions
  | null;

/* ACTIONS TYPES */

type UsersActionsTypes = typeof types.SET_USERS;

export type UsersActions = { type: UsersActionsTypes; payload?: UsersPayload };
