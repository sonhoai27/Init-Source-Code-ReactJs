import { combineReducers } from 'redux';
import sourceReducer from './sources/SourceReducer';

const rootReducer = combineReducers({
  sourceReducer,
});

export default rootReducer;
