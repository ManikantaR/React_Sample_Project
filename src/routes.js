/* Module Dependencies */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import Home from './Home/Home.jsx';
import HomePage from './Home/HomePage.jsx';
import AddCustomer from './AddCustomer/AddCustomer.jsx';
import ViewCustomers from './ViewCustomers/ViewCustomer.jsx';

/* Routes Render Function */
export class Routes extends React.Component {
  render() {
    return (
      <Router history = {browserHistory}>
        <Route path = "/" component = {Home}>
            <IndexRoute component={HomePage}/>
            <Route path = "add-customer" component = {AddCustomer} />
            <Route path = "view-customers" component = {ViewCustomers} />
        </Route>
      </Router>
    );
  }
}
