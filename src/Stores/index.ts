import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import loggerMiddleware from '@app/configs/LoggerMiddleware';

import rootReducer from './Reducers';
import rootSaga from './RootSaga';

const sagaMiddleware = createSagaMiddleware()

const defaultMiddlewares = [
  sagaMiddleware,
  loggerMiddleware,
];

const store = createStore(
  rootReducer,
  applyMiddleware(...defaultMiddlewares),
)

sagaMiddleware.run(rootSaga)

export default store;
