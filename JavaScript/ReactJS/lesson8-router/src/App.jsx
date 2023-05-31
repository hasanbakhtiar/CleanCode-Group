import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';


class Header extends Component{
  render(){
    return(
      <ol>
        <li><Link to="/">home</Link></li>
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
      </ol>
    )
  }
}



class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
    )
  }
}

export default App