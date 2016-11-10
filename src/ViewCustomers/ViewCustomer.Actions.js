/* Modules Dependencies */
import {RECIEVE_CUSTOMERS, CUSTOMERS_LIST_SERVICE} from './ViewCustomer.Constants';
import {requestGet} from '../Common/Api';
/**
 @param {number} param this is param.

 */
/* ViewCustomer Actions */
export function RecieveCustomerList(customers) {
  return {
    type: RECIEVE_CUSTOMERS,
    customers
  };
}

/* Async call using redux-thunk */
export function fetchCustomers() {
  return function(dispatch) {
     let recieveResponse = (response) => {
        dispatch(RecieveCustomerList(response.customers));
      };
      requestGet(CUSTOMERS_LIST_SERVICE, '', recieveResponse);   
    };
  }

