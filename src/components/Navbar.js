import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import LoginButton from './login';
import LogoutButton from './logout';
import { withAuth0 } from "@auth0/auth0-react";


class NavigationBar extends React.Component {
  render() {
    return(
      <Navbar className="navbar" expand='lg' variant="light">
        <Container>
          {/* <Navbar.Brand href=''>Find A Pet!</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="headerNav">
              <Nav.Link className="navLink" href='/'>Home 🐾</Nav.Link>
              {this.props.auth0.isAuthenticated && <Nav.Link className="navLink" href='/profile'>Profile 🐾</Nav.Link>}
              <Nav.Link className="navLink" href='/aboutus'>About Us 🐾</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {this.props.auth0.isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Container>
      </Navbar>
    )
  }

}

export default  withAuth0(NavigationBar);
