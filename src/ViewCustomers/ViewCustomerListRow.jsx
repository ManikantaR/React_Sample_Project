/* Module Dependencies */
import React, {propTypes} from 'react';
import { Link } from 'react-router';

/* ViewCustomerListRow Stateless Function */
const ViewCustomerListRow = ({customer}) => {
  return(
    <tr>
      <td><Link to={'/customer/' + customer.customerId}>{customer.customerId}</Link></td>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.mobile}</td>
      <td>{customer.email}</td>
      <td>{customer.address}</td>
      <td>{customer.category}</td>      
      <td><i className="fa fa-pencil" /></td>
      <td><i className="fa fa-trash" /></td>
    </tr>
  );
};

/* propTypes */
ViewCustomerListRow.propTypes = {
  customer: React.PropTypes.object.isRequired
};

/* export ViewCustomer */
export default ViewCustomerListRow;