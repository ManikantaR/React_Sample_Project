/* Modules Dependencies */
import {ADD_CUSTOMER} from './AddCustomer.Constants';

let nextCustId = 0;

/* Reducer function */
const addCustomer = (state = [], action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return action.customers;
    default:
      return state;
  }
};

/* Export addCustomer Reducer */
export default addCustomer;
