import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import loggerMiddleware from '@app/configs/LoggerMiddleware';

import rootReducer from './reducers';
import rootSaga from './rootSaga';

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
