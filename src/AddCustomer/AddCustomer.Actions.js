/* Modules Dependencies */
import {ADD_CUSTOMER, ADD_CUSTOMER_SERVICE} from './AddCustomer.Constants';
import {requestPost} from '../Common/Api';

/**
 @param {number} param this is param.

 */
/* AddCustomer Actions */
export function addToCustomers(customers) {
  return {
    type: ADD_CUSTOMER,
    customers
  };
}

export function addCustomer(customerData) {  
  return function(dispatch) {
      let recieveResponse = (response, postData) => {
        dispatch(addToCustomers(postData));
      };
      requestPost(ADD_CUSTOMER_SERVICE, customerData, recieveResponse);
    };   
  } 

