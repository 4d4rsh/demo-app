import { createStore } from 'redux';
import typeReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store =
  process.env.NODE_ENV === 'development'
    ? createStore(
        typeReducer,
        composeWithDevTools())
    : createStore(typeReducer)

export default store;