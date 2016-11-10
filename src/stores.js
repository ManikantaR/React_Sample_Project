/* Module Dependencies */
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './combined.reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
/**
 @param {number} param this is param.

 */
/* Export store */
export default function Stores(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
