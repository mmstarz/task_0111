/* eslint-ignore default-param-last */
import types from 'redux/constants';
import { UsersActions, UsersState } from 'redux/users/interfaces';

const initialState: UsersState = {
  data: [],
  isLoading: false,
  isError: false,
  error: '',
  options: {
    count: 0,
    limit: 5,
    skip: 0,
    page: 1,
    criteria: '',
    sort: '',
    direction: '',
  },
};

const usersReducer = (
  state = initialState,
  action: UsersActions,
): UsersState => {
  switch (action.type) {
    case types.SET_USERS:
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

export default usersReducer;
