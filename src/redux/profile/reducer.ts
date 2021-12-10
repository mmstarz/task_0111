/* eslint-ignore default-param-last */
import types from 'redux/constants';
import { ProfileActions, IProfileState } from 'redux/profile/interfaces';

const initialState: IProfileState = {
  data: {},
  error: '',
  isError: false,
  isLoading: false,
};

const profileReducer = (
  state = initialState,
  action: ProfileActions,
): IProfileState => {
  switch (action.type) {
    case types.SET_PROFILE:
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

export default profileReducer;
