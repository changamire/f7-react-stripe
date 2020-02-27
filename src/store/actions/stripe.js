import {
  TAKE_PAYMENT,
} from '../constants/stripe';

export const takePayment = (payload) => ({
  type: TAKE_PAYMENT,
  payload,
});
