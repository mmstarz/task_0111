import { createStore, applyMiddleware, compose, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {
  RootStateType,
  RootStateActions,
} from 'redux/rootReducer';
import { rootSaga } from 'redux/rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : compose(applyMiddleware(sagaMiddleware));

// Mount it on the Store
const store: Store<RootStateType, RootStateActions> = createStore(
  rootReducer,
  enhancer,
);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
