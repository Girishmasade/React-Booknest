import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Books from '../pages/Books'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default Router
