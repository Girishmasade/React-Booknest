import React from 'react'
import Router from './routers/Router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Newsletter from './components/NewsLetter'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Router/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App
