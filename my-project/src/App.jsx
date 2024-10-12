import React from 'react'
import { useEffect } from 'react'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100
    })
    AOS.refresh()
  },[])

  return (
  <>
    <Navbar />
    <Hero />
    <Products />
  </>
  )
}

export default App