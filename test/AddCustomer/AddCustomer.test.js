import React from 'react';
import chai, {expect} from 'chai';
import chaiHttp from 'chai-http';
import {mount, shallow} from 'enzyme';
// var expect = require('chai').expect;

import AddCustomer from '../../src/AddCustomer/AddcustomerForm';

import * as actions from '../../src/AddCustomer/Addcustomer.Actions'
import * as types from '../../src/AddCustomer/Addcustomer.Constants'

chai.use(chaiHttp);

let should = chai.should();

describe('Add Customer Form Presence', () => {
  const wrapper = mount(<AddCustomer />);
  it('Checking whether form is present', () => {
    expect(wrapper.find('form')).to.have.length(1);
  });
  it('Checking whether First Name is present in the form', () => {
    expect(wrapper.find('input[id="firstName"]')).to.have.length(1);
  });
  it('Checking whether Last Name is present', () => {
    expect(wrapper.find('input[id="lastName"]')).to.have.length(1);
  });
  it('Checking whether Email ID is present in the form', () => {
    expect(wrapper.find('input[id="email"]')).to.have.length(1);
  });
  it('Checking whether Mobile No is present in the form', () => {
    expect(wrapper.find('input[id="mobileNumber"]')).to.have.length(1);
  });
  it('Checking whether Address is present', () => {
    expect(wrapper.find('textarea[id="address"]')).to.have.length(1);
  });
  it('Checking whether Category is present in the form', () => {
    expect(wrapper.find('input[id="category"]')).to.have.length(1);
  });
  it('Checking whether submit button is present in the form', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });
  it('Should have props for handleSubmit', function () {
    //console.log(wrapper.props().handleSubmit);
    expect(wrapper.props().handleSubmit).should.be.defined;
  });
  //	it('Should have props for handleEmailChange', function () {
  //  expect(wrapper.props().handleEmailChange).not.to.be.undefined;
  //});
  //	it('Checking Email with the setted email state', function () {
  //	wrapper.setState({ email: 'someone@example.com' });
  // wrapper.find('input[id="email"]').simulate('change');
  //	expect(wrapper.props().email).to.equal('someone@example.com');
  //});
  it('Should update the state on clicking submit button', function () {
    const wrapper1 = mount(<AddCustomer />);
    //console.log(wrapper.state('firstName'));
    wrapper.setState({ firstName: 'abc', lastName: 'abcd', email: 'abc.abcd@gmail.com', mobileNumber: '123456', address: 'Chennai', category: 'Mutual' });
    //console.log(wrapper.state('firstName'));
    wrapper.find('button').simulate('click');
    //console.log(wrapper.state('firstName'));
    expect(wrapper.state('firstName')).to.equal('abc');
    expect(wrapper.state('lastName')).to.equal('abcd');
    expect(wrapper.state('email')).to.equal('abc.abcd@gmail.com');
    expect(wrapper.state('mobileNumber')).to.equal('123456');
    expect(wrapper.state('address')).to.equal('Chennai');
    expect(wrapper.state('category')).to.equal('Mutual');
  });
});
describe('Actions', () => {
  it('Should create an action to add a Customer', () => {
    let customers = {
      firstName: "abc",
      lastName: "abcd",
      email: "abc.abcd@gmail.com",
      mobile: "123456",
      address: "Chennai",
      category: "Mutual"
    };
    const expectedAction = {
      type: types.ADD_CUSTOMER,
      customers
    }
		/*console.log("__________________________________________________________\n");
		console.log(actions.addToCustomers(customers).toString() == expectedAction.toString());
		console.log("__________________________________________________________\n");
		console.log(expectedAction);
		console.log("__________________________________________________________\n");*/
    expect(actions.addToCustomers(customers).toString()).to.equal(expectedAction.toString())
  })
})
describe('/POST Customer', function () {
  this.timeout(15000);
  it('it should not POST a customer without manditory fields', (done) => {
    let customer = {
      firstName: "abc",
      lastName: "abcd",
      email: "abc.abcd@abcd.com",
      mobileNumber: 11111111,
      address: "Chennai",
      category: "Fund"
    }
    chai.request('http://localhost:3000')
      .post('/proxy/customer')
       .send(customer)
      // .end(function (res) {
      //   expect(res).to.have.status(200);
      //   expect(res).to.be.a('object');
      //   done();
      // })
    .end((err, res) => {
      // expect(res).should.have.status(200);
       expect(res).should.be.a('object');
      //res.body.should.have.property('errors');
      done();
    });
  });
});
