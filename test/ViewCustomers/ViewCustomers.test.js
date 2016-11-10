import React from 'react';
import chai, { expect } from 'chai'
import {mount, shallow} from 'enzyme';
// import Stores from '../../src/stores.js';
import ViewCustomer from '../../src/ViewCustomers/ViewCustomerList';
// import customers from './ViewCustomerData';
import * as actions from '../../src/ViewCustomers/ViewCustomer.Actions';
import * as types from '../../src/ViewCustomers/ViewCustomer.Constants';
import * as reducer from '../../src/ViewCustomers/ViewCustomer.Reducer';
//chai.should();

 var should = chai.should();
let customers = [{
    "firstName": "abc",
    "lastName": "abcd",
    "mobile": "198191",
    "email": "abc.abcd@abcd.com",
    "address": "No Address",
    "customerId": 305427,
    "category": "Mutual Fund"
}];
describe('View Customer table Presence', () => {
  const wrapper = mount(<ViewCustomer  customers = {customers}/>);
  it('Checking whether table is present', () => {
    expect(wrapper.find('table')).to.have.length(1);
  });
  it('checking whether CustomerId is present', () => {
    expect(wrapper.find('#customerId')).to.have.length(1)
  });
  it('checking whether CustomerId is present', () => {
    expect(wrapper.find('#firstName')).to.have.length(1)
  });
  it('checking whether CustomerId is present', () => {
    expect(wrapper.find('#lastName')).to.have.length(1)
  });
  it('checking whether CustomerId is present', () => {
    expect(wrapper.find('#mobile')).to.have.length(1)
  });
  it('checking whether CustomerId is present', () => {
    expect(wrapper.find('#email')).to.have.length(1)
  });
  it('checking whether CustomerId is present', () => {
    expect(wrapper.find('#address')).to.have.length(1)
  });
  it('checking whether CustomerId is present', () => {
    expect(wrapper.find('#category')).to.have.length(1)
  });
  it('checking whether CustomerId is present', () => {
    expect(wrapper.find('#actions')).to.have.length(1)
  });
});

