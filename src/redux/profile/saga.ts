import { all, call, put, takeEvery, SagaReturnType } from 'redux-saga/effects';
import types from 'redux/constants';
import { IError } from 'common/interfaces';
import { ICommonWorker, ICriteria } from 'redux/common/interfaces';
import { ProfilePayload } from 'redux/profile/interfaces';
import { getProfile } from 'redux/api/api';

function* getProfileWorker({ type, payload }: ICommonWorker<ProfilePayload>) {
  try {
    // loading
    yield put({
      type: types.SET_PROFILE,
      payload: { isLoading: true },
    });

    const search = payload as ICriteria;

    const data: SagaReturnType<typeof getProfile> = yield call(
      getProfile,
      search.criteria,
    );

    // result
    yield put({
      type: types.SET_PROFILE,
      payload: {
        data,
        isLoading: false,
        isError: false,
        error: '',
      },
    });
  } catch (error) {
    const err = error as IError;
    yield put({
      type: types.SET_PROFILE,
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

function* profileWatcher() {
  yield all([takeEvery(types.WATCH_GET_PROFILE, getProfileWorker)]);
}

export default profileWatcher;
