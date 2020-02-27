import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers/reducer';
import rootSaga from './sagas/saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default store;
