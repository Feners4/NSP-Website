import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';


var initialState = {
  cart:"medium",
  data: [],
  url: "/api/comments",
  pollInterval: 2000
}

const store = createStore(
  reducer,
  applyMiddleware(
    createLogger(),
    thunkMiddleware
  )
);
export default store; 