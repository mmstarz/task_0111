import {
  all,
  call,
  put,
  select,
  takeEvery,
  takeLatest,
  SagaReturnType,
} from 'redux-saga/effects';
import types from 'redux/constants';
import { IError } from 'common/interfaces';
import {
  ICommonListOptions,
  ICommonWorker,
  ICriteria,
} from 'redux/common/interfaces';
import { UsersPayload } from 'redux/users/interfaces';
import { getUsers, searchUsers } from 'redux/api/api';

function* getUsersWorker({ type, payload }: ICommonWorker<UsersPayload>) {
  try {
    const options: ICommonListOptions = yield select(
      state => state?.users?.options,
    );

    // loading
    yield put({
      type: types.SET_USERS,
      payload,
    });

    const data: SagaReturnType<typeof getUsers> = yield call(getUsers);

    // result
    yield put({
      type: types.SET_USERS,
      payload: {
        data,
        isLoading: false,
        isError: false,
        error: '',
        options: { ...options, count: data.length },
      },
    });
  } catch (error) {
    const err = error as IError;
    yield put({
      type: types.SET_USERS,
      payload: {
        isLoading: false,
        isError: true,
        error: err.message,
      },
    });
    yield put({
      type: types.WATCH_ADD_NOTIFICATION,
      payload: { type: 'fail', msg: err.message },
    });
  }
}

function* setUsersWorker({ type, payload }: ICommonWorker<UsersPayload>) {
  yield put({
    type: types.SET_USERS,
    payload,
  });
}

function* searchUsersWorker({ type, payload }: ICommonWorker<UsersPayload>) {
  try {
    const options: ICommonListOptions = yield select(
      state => state?.users?.options,
    );

    const search = payload as ICriteria;

    // loading
    yield put({
      type: types.SET_USERS,
      payload: { isLoading: true },
    });

    const data: SagaReturnType<typeof searchUsers> = yield call(
      searchUsers,
      search.criteria,
    );

    // result
    yield put({
      type: types.SET_USERS,
      payload: {
        data,
        isLoading: false,
        isError: false,
        error: '',
        options: { ...options, count: 1 },
      },
    });
  } catch (error) {
    const err = error as IError;
    yield put({
      type: types.SET_USERS,
      payload: {
        isLoading: false,
        isError: true,
        error: err.message,
      },
    });
    yield put({
      type: types.WATCH_ADD_NOTIFICATION,
      payload: { type: 'fail', msg: err.message },
    });
  }
}

function* usersWatcher() {
  yield all([
    takeLatest(types.WATCH_SEARCH_USERS, searchUsersWorker),
    takeLatest(types.WATCH_GET_USERS, getUsersWorker),
    takeEvery(types.WATCH_SET_USERS, setUsersWorker),
  ]);
}

export default usersWatcher;
