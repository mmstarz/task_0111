import { all, call, put, takeEvery, SagaReturnType } from 'redux-saga/effects';
import types from 'redux/constants';
import { IError } from 'common/interfaces';
import { ICommonWorker, ICriteria } from 'redux/common/interfaces';
import { ProfilePayload } from 'redux/profile/interfaces';
import { getRepos } from 'redux/api/api';

function* getReposWorker({ type, payload }: ICommonWorker<ProfilePayload>) {
  try {
    // loading
    yield put({
      type: types.SET_REPOS,
      payload: { isLoading: true },
    });

    const search = payload as ICriteria;

    const data: SagaReturnType<typeof getRepos> = yield call(
      getRepos,
      search.criteria,
    );

    // result
    yield put({
      type: types.SET_REPOS,
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
      type: types.SET_REPOS,
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

function* reposWatcher() {
  yield all([takeEvery(types.WATCH_GET_REPOS, getReposWorker)]);
}

export default reposWatcher;
