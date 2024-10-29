import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catalog from './components/Catalog.jsx/Catalog'

const App = () => {
  return (
   <>
    <Header/>
    <Hero/>
    <Catalog/>
   </>
  )
}

export default App