import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import combineReducer from './root-reducer';

const middleware = [logger];

const store = createStore(combineReducer, applyMiddleware(...middleware));

export default store;