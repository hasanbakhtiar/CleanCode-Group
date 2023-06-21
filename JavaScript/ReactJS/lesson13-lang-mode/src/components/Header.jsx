import React, { useContext, useState } from 'react'
import {  Container, Nav, Navbar,Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { ProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import { ModeContext } from '../context/ModeContext'
import { LangContext } from '../context/LangContext'

const Header = () => {

  const { totalItems } = useCart();
  const [product] = useContext(ProductContext);
  const [query, setQuery] = useState("");
  const [searchvalues, setSearchvalues] = useState("");
  const [mode,setMode] = useContext(ModeContext);
  const [lang,setLang] = useContext(LangContext);

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchvalues(query)
  }


  return (
    <Navbar bg="dark" className='navbar-dark' expand="lg">
      <Container>
        <LinkContainer to="/">
        <Navbar.Brand >1001 Best</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <LinkContainer to="/">
              <Nav.Link >Home</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/products">

              <Nav.Link >Products</Nav.Link>
            </LinkContainer>

          </Nav>
          <div>
            <button type="button" className="btn btn-warning text-dark" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                  </div>
                  <div className="modal-body">

                    <form onSubmit={searchSubmit} className="input-group mb-3">
                      <input onChange={e => setQuery(e.target.value)} type="text" className="form-control" placeholder="Enter product" />
                      <button className="btn btn-dark" type="submit" id="button-addon2">Search</button>
                    </form>



                    <ul className="list-group">
                      {
                        !searchvalues.length ? "" : product.filter(value => value.title.toLocaleLowerCase().includes(searchvalues)).map(item => (

                          <Link to={`/products/${item.id}`}> <li className="list-group-item d-flex justify-content-between" key={item.id}>{item.title}<img src={item.images[0]} width={50} alt="" /></li></Link>
                        ))
                      }

                    </ul>

                  </div>

                </div>
              </div>
            </div>
          </div>
          <Link to="/basket" type="button" class="btn btn-primary position-relative ms-3">
          <i className="fa-solid fa-cart-shopping"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
            </span>
          </Link>
          <Button variant='outline-warning ms-3' onClick={()=>{
              mode === 'light'? setMode('dark'):setMode('light');
              mode === 'light'? localStorage.setItem('mode','dark'):localStorage.setItem('mode','light');
          }}>{mode === 'light'?"🌙":"☀️"}</Button>
          <Button style={{textTransform:'uppercase'}} variant='success ms-3'
          onClick={()=>{
            lang==='en'?setLang('az'):setLang('en');
          }}
          >{lang}</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header