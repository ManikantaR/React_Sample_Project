/* Module dependencies */
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

/* Home Component */
class Home extends React.Component {
  /* Render */
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <LinkContainer to="/">
                <a href="#">Admin</a>
              </LinkContainer>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <LinkContainer to="/add-customer">
                <span>Add customer</span>
              </LinkContainer>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <LinkContainer to="/view-customers">
                <span>View customer</span>
              </LinkContainer>
            </NavItem>        
          </Nav>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

/* propTypes Validation */
 Home.propTypes = {
   children: PropTypes.object.isRequired
 };

/* Export Home*/
export default Home;