/* Module Dependencies */
import React, { PropTypes } from 'react';
import CustomerListRow from './ViewCustomerListRow.jsx';
import { Table } from 'react-bootstrap';

/* ViewCustomerList Stateless Function */
const ViewCustomerList = ({customers}) => {
  return(
    <Table bordered>
      <thead>
        <tr>
          <th id = "customerId">CustomerID</th>
          <th id = "firstName">Firstname</th>
          <th id = "lastName">Lastname</th>
          <th id = "mobile">Mobile</th>
          <th id = "email">Email</th>
          <th id = "address">Address</th>
          <th id = "category">Category</th>
          <th colSpan="3" id = "actions">Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(customer =>
          <CustomerListRow key={customer.customerId} customer={customer} />
        )}
      </tbody>
    </Table>
  );
};

/* propTypes */
ViewCustomerList.propTypes = {
  customers: React.PropTypes.array.isRequired
};

/* export ViewCustomerList */
export default ViewCustomerList;