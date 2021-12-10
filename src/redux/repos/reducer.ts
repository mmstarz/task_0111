/* eslint-ignore default-param-last */
import types from 'redux/constants';
import { IReposState, ReposActions } from 'redux/repos/interfaces';

const initialState: IReposState = {
  data: [],
  error: '',
  isError: false,
  isLoading: false,
};

const reposReducer = (
  state = initialState,
  action: ReposActions,
): IReposState => {
  switch (action.type) {
    case types.SET_REPOS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reposReducer;
