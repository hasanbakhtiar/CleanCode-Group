import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Header from './components/Header'
import { Container } from 'react-bootstrap'
import { ProductProvider } from './context/ProductContext'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'

const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Header />
        <Container>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<ProductList />}></Route>
            <Route path='/products/:url' element={<ProductDetails />}></Route>
          </Routes>
        </Container>
        <Footer />
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App