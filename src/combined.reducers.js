/* Module dependencies */
import { combineReducers } from 'redux';
import customers from './ViewCustomers/ViewCustomer.Reducer';

/* Steps to Add Reducers
 * 1. import the reducer in module dependencies.
 * 2. Add the reducer name in rootReducer.
 */
const rootReducer = combineReducers({
  customers
});

/* Export combined reducer*/
export default rootReducer;