/* Module Dependencies */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as customerActions from './ViewCustomer.Actions';
import ViewCustomerList from './ViewCustomerList.jsx';
// debugger;
class ViewCustomer extends React.Component {
  // Constructor - Bind / Initial
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    let {dispatch} =  this.props;
    dispatch(customerActions.fetchCustomers());
  }

  // Render
  render() {
    const {customers} = this.props;
    return(
      <div>
        <h1>Customer List</h1>
        <hr />
        <ViewCustomerList 
          customers={customers} 
        />
      </div>
    );
  }
}

/* propTypes */
ViewCustomer.propTypes = {
  dispatch : React.PropTypes.func.isRequired,
  customers: React.PropTypes.array.isRequired
}; 

/* Redux connect and its related functions */
function mapStateToProps(state, ownProps) {
  return {
    customers: state.customers
  };
}

/* Export ViewCustomer */
export default connect(mapStateToProps)(ViewCustomer);