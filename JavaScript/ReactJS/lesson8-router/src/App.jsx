import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './pages/Products';
import NotFoundPage from './pages/NotFoundPage';





class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFoundPage  />}></Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App