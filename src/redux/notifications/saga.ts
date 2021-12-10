import { all, put, takeEvery, delay } from 'redux-saga/effects';
import { v4 as uuidv4 } from 'uuid';
import { ICommonWorker } from 'redux/common/interfaces';
import { NotificationsPayload } from 'redux/notifications/interfaces';
import types from 'redux/constants';

function* addNotificationsWorker({
  type,
  payload,
}: ICommonWorker<NotificationsPayload>) {
  const id = uuidv4();
  yield put({
    type: types.ADD_NOTIFICATION,
    payload: { ...payload, id },
  });
  yield delay(2000);
  yield put({ type: types.WATCH_REM_NOTIFICATION, payload: { id } });
}

function* remNotificationsWorker({
  type,
  payload,
}: ICommonWorker<NotificationsPayload>) {
  yield put({ type: types.REM_NOTIFICATION, payload });
}

function* notificationsWatcher() {
  yield all([
    takeEvery(types.WATCH_ADD_NOTIFICATION, addNotificationsWorker),
    takeEvery(types.WATCH_REM_NOTIFICATION, remNotificationsWorker),
  ]);
}

export default notificationsWatcher;
