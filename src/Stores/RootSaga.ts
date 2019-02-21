import * as ReduxSaga from 'redux-saga'

import { helloSaga } from './Init'

export default function* rootSaga() {
  yield ReduxSaga.default.call(
    [
      helloSaga,
    ],
  )
}
