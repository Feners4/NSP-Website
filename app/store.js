import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import  reducer  from './reducers';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';


const store = createStore(
  reducer,
  undefined,
  compose(
  	applyMiddleware(createLogger(), thunkMiddleware),
  	autoRehydrate()
  )
);

persistStore(store, {whitelist: ['cart']});

export default store; 