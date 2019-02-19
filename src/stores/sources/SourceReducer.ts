import { REQUEST, FAILURE, SUCCESS } from './../../configs/ActionTypes';
import { fromJS } from 'immutable'
import { GET_SOURCES } from './SourceTypes';

const initialState = fromJS({
  sources: [],
})

interface IActions {
  type: string;
  payload: any,
}

const sourceReducer = (state = initialState, action: IActions) => {
  switch (action.type) {
    case REQUEST(GET_SOURCES):
    case FAILURE(GET_SOURCES): {
      return state
    }

    case SUCCESS(GET_SOURCES): {
      return state.setIn(['sources'], fromJS(action.payload.data))
    }
    default: return state
  }
}

export default sourceReducer
export {
  IActions,
}
