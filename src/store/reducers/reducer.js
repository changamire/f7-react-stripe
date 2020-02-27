import { combineReducers } from 'redux';
import stripeReducer from './stripe';

const reducer = combineReducers({
  stripe: stripeReducer,
});

export default reducer;
