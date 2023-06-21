import React, { useContext } from 'react'
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
import { ModeContext, ModeProvider } from './context/ModeContext'
import { LangProvider } from './context/LangContext'

const Main = () => {
  const [mode] = useContext(ModeContext);
  return (
    <div className={mode}>
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
    </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <ModeProvider>
        <LangProvider>
          <Main />
        </LangProvider>
      </ModeProvider>
    </BrowserRouter>
  )
}

export default App