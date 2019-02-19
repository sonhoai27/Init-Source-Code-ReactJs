import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import loggerMiddleware from '@app/configs/LoggerMiddleware';

const defaultMiddlewares = [
  thunkMiddleware,
  promiseMiddleware(),
  loggerMiddleware,
];

// @ts-ignore
const composedMiddlewares = (middlewares: any[]) => {

  return compose(applyMiddleware(...defaultMiddlewares, ...middlewares));
}
const initialize = (initialState: object = {}, middlewares: any[] = []) => {

  return createStore(rootReducer, initialState, composedMiddlewares(middlewares));
};

export default initialize;
