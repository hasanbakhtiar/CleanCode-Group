import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" className='navbar-dark' expand="lg">
        <Container>
          <LinkContainer  to="/">
          <Navbar.Brand className='navbar-logo'>Best Shop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">

              <LinkContainer to="/">
                <Nav.Link >Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link >About</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/products">
                <Nav.Link >Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link >Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
}

export default Header