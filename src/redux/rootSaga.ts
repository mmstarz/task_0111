import { all, spawn } from 'redux-saga/effects';

import usersWatcher from 'redux/users/saga';
import profileWatcher from 'redux/profile/saga';
import reposWatcher from 'redux/repos/saga';
import notificationsWatcher from 'redux/notifications/saga';

export function* rootSaga() {
  yield all([
    spawn(notificationsWatcher),
    spawn(usersWatcher),
    spawn(profileWatcher),
    spawn(reposWatcher),
  ]);
}

// effect - object of instructions for saga middleware

// delay - waits for some time.
// example: yield delay(500); // waits for 500ms

// take - informs saga middleware to await for dispatch action type.
// function generator stops before this dispach to be done. triggers one time.

// takeEvery - takes action type & worker. triggers everytime for this action type.

// takeLatest - takes action type & worker. triggers everytime for this action type.
// cancel any previous running saga process and handle only last one.

// takeLeading - takes action type & worker. triggers everytime for this action type.
// cancel any next running saga process and handle only first one.

// put - takes dispatch action and put it to the store.

// call - takes function and handle it.
// if function returns promise then stops saga and await till it will be resolved.
// call with arguments example1: yield call(getTodos, arg1, arg2...)
// this will start getTodos(arg1, arg2 ...)
// call context & context function axample2: yield call([ctx, ctx.method1])
// const data = yield call([request, request.json])

// take & call - are BLOCKABLE effects. they block saga before complete.

// fork - tells saga to handle function without blocking.
// call with arguments example: yield fork(getTodos, arg1, arg2...)
// this will start getTodos(arg1, arg2 ...)

// fork - process is bind to the parent. if error occurs in fork, it will influence parent function.

// spawn - creates parallel task in saga root. spawn process not bind to the parent.

// join - takes task reference. blocks nonblockable process and return its result.

// select - gives saga access to the store (works like useSelector/mapStateToProps)
// select is nonblockable.
// example: const storeState = select(state => state);

// all - launch all effects in parallel and waits for them to complete
// if one of the taken effects will be blockable then 'all' effect also will be blockable.

// apply - handle context function
// example: yield apply(ctx, ctx.method1);
// const data = yield apply(request, request.json);

// actionChannel - form actionS buffer. to handle them one by one.
// example:
// const channel = yield actionChannel('<ACTION_TYPE>');
// while (true) {
//   yield take(channel);
//   yield call(<YOUR_WORKER>);
// }

// cancel - ?
