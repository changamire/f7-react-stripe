import { fork, all } from 'redux-saga/effects';

import stripeSaga from './stripe';

export default function* rootSaga() {
  yield all([
    fork(stripeSaga),
  ]);
}

export {
  stripeSaga,
};
