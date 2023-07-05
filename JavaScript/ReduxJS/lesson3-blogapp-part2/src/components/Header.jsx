import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <LinkContainer to='/'>
      <Navbar.Brand>Programming news</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <LinkContainer to="/">
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>
        </Nav>
        <LinkContainer to="/admin">
        <Button variant="success">Admin</Button>
        </LinkContainer>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header