import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import encryptor from 'redux/encryptor';

import { ReposActions } from 'redux/repos/interfaces';
import { ProfileActions } from 'redux/profile/interfaces';
import { UsersActions } from 'redux/users/interfaces';
import { NotificationsActions } from 'redux/notifications/interfaces';

import reposReducer from 'redux/repos/reducer';
import profileReducer from 'redux/profile/reducer';
import usersReducer from 'redux/users/reducer';
import notificationsReducer from 'redux/notifications/reducer';

const usersConfig = {
  key: `${process.env.REACT_APP_WEBSITE_NAME}::users`,
  storage,
  blacklist: [],
  transforms: [encryptor],
};

const profileConfig = {
  key: `${process.env.REACT_APP_WEBSITE_NAME}::profile`,
  storage,
  blacklist: [],
  transforms: [encryptor],
};

const reposConfig = {
  key: `${process.env.REACT_APP_WEBSITE_NAME}::repos`,
  storage,
  blacklist: [],
  transforms: [encryptor],
};

const rootReducer = combineReducers({
  users: persistReducer(usersConfig, usersReducer),
  profile: persistReducer(profileConfig, profileReducer),
  repos: persistReducer(reposConfig, reposReducer),
  notifications: notificationsReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type RootStateActions =
  | UsersActions
  | ProfileActions
  | ReposActions
  | NotificationsActions;

export default rootReducer;
