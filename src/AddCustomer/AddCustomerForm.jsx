/* Module Dependencies */
import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import NotificationSystem from 'react-notification-system';

class AddCustomerForm extends React.Component {
  /* Constrctor*/
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._notificationSystem = null;
  }

  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }  

  /* Child Function */
  handleSubmit(e) {
    e.preventDefault();
    if (!this.firstName.value.trim()) {
      return;
    }    
    let formValues = {
      firstName : this.firstName.value,
      lastName : this.lastName.value,
      email : this.email.value,
      mobile : this.mobile.value,
      address : this.address.value,
      category: this.category.value
    };
    /* save customer info */
    this.props.onSave(formValues);

    // notification
    this._notificationSystem.addNotification({
      title: 'Success',
      message: 'Customer added successfully',
      level: 'success'
    });

    // clear form value
    this.firstName.value = '';
    this.lastName.value = '';
    this.email.value = '';
    this.mobile.value = '';
    this.address.value = '';
    this.category.value = '';
  }

  /* Render */
  render() {
    return (
      <div>
        <h1>Add Customer</h1>
        <hr />
        <form className="form-horizontal" id="customerform">
          <div className="form-group">
            <NotificationSystem ref="notificationSystem" />
            <label htmlFor="firstName" className="col-sm-2 control-label">FirstName</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="firstName" placeholder="Jon" ref={fname => {this.firstName = fname;}} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="col-sm-2 control-label">LastName</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="lastName" placeholder="Smith" ref={lname => {this.lastName = lname;}} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email" className="col-sm-2 control-label">Email ID</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" id="email" placeholder="abc@xyz.com" ref={em => {this.email = em;}} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber" className="col-sm-2 control-label">Mobile No</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="mobileNumber" placeholder="123456789" ref={mob => {this.mobile = mob;}} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="address" className="col-sm-2 control-label">Address</label>
            <div className="col-sm-10">
              <textarea type="text" className="form-control" id="address" placeholder="Chennai" ref={addr => {this.address = addr;}} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="category" className="col-sm-2 control-label">Category</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="category"  placeholder="Mutual Fund" ref={category => {this.category = category;}} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>&nbsp;&nbsp;&nbsp;
              <Link to="/" className="btn btn-default">Back</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

/* propType Validation */
AddCustomerForm.propTypes = {
  onSave : PropTypes.func.isRequired
};

/* export AddCustomer */
export default AddCustomerForm;
