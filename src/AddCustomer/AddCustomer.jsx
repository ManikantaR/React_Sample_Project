/* Module Dependencies */
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addCustomer } from './AddCustomer.Actions';
import AddCustomerForm from './AddCustomerForm.jsx';
/**
 @param {number} param this is param.

 */
class AddCustomer extends React.Component {
  // Constructor - Bind / Initial
  constructor(props) {
    super(props);
    this.saveCustomer = this.saveCustomer.bind(this);   //this is required to bind the dispatch
  }

  // Child function
  saveCustomer(formData) {
    const {dispatch} = this.props;
    dispatch(addCustomer(formData));
  }

  // Render
  render() {
    return (
      <div>
        <AddCustomerForm
          onSave={this.saveCustomer}
        />
      </div>
    );
  }
}

/* propTypes */
AddCustomer.propTypes = {
  dispatch: React.PropTypes.func.isRequired
};

/* Export AddCustomer */
export default connect()(AddCustomer);
