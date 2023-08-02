import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  const wishdata:any = useSelector((p:any)=>p.wish);
  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <LinkContainer to="/"><Nav.Link >Product</Nav.Link></LinkContainer>
          <LinkContainer to="/wish"><Nav.Link >WishList({wishdata.length})</Nav.Link></LinkContainer>
     

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header