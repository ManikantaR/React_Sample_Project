/* Module Dependencies */
import {RECIEVE_CUSTOMERS} from './ViewCustomer.Constants';
/**
 @param {number} param this is param.

 */
/* export ViewCustomerReducer */
export default function viewCustomerReducer(state = [], action) {
  switch (action.type) {
    case RECIEVE_CUSTOMERS:
      return action.customers;
    default:
        return state;
  }
}

