import { takeEvery } from 'redux-saga/effects';
import axios from 'axios';

const API_URL = '';
const API_KEY = '';

import {
  TAKE_PAYMENT,
} from '../constants/stripe';

const PAYMENT_URL = API_URL;

const HANDLERS = {
  * [TAKE_PAYMENT](defer, data) {
      console.log(`Take payment ${JSON.stringify(data)}`);

    const options = {
      headers: {'x-api-key': API_KEY}
    };
      axios.post(PAYMENT_URL, {}, options).then(
        res => {
          console.log(res);
        }
      )
  }
};

export function* switchSagasStripe({ type, payload, defer }) {
  const handler = HANDLERS[type];
  const { ...data } = payload;
  if (handler != null) yield* handler(defer, data);
}

export default function* sagaReducerStripe() {
  yield takeEvery('*', switchSagasStripe);
}
