import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { ProductProvider } from './context/ProductContext'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import Basket from './pages/Basket'
import { CartProvider } from 'react-use-cart'

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <ProductProvider>
          <Header />
          <Container>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/products' element={<ProductList />}></Route>
              <Route path='/products/:url' element={<ProductDetails />}></Route>
              <Route path='/basket' element={<Basket />}></Route>
            </Routes>
          </Container>
          <Footer />
        </ProductProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App