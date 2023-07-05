import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/update/AddBlog'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/admin' element={<Dashboard />}></Route>
            <Route path='/admin/add' element={<AddBlog />}></Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App