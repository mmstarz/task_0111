import types from 'redux/constants';
import { IRepo } from 'common/interfaces';
import { ICommonDataState, ICriteria } from 'redux/common/interfaces';

/* STATE TYPES */
export interface IReposState extends ICommonDataState {
  data: IRepo[];
}

/* PAYLOAD TYPES */
type ReposData = Pick<IReposState, 'data'>;
type ReposError = Pick<IReposState, 'error'>;
type ReposStatus = Pick<IReposState, 'isError'>;
type ReposLoading = Pick<IReposState, 'isLoading'>;

export type ReposPayload =
  | ReposData
  | ReposError
  | ReposStatus
  | ReposLoading
  | ICriteria
  | null;

/* ACTIONS TYPES */

type ReposActionsTypes = typeof types.SET_PROFILE;

export type ReposActions = {
  type: ReposActionsTypes;
  payload?: ReposPayload;
};
