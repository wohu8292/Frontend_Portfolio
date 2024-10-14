import React, { useState } from 'react'
import { useEffect } from 'react'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Products from './Components/Products'
import TopProducts from './Components/TopProducts'
import Banner from './Components/Banner'
import Subscribe from './Components/Subscribe'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'
import Popup from './Components/Popup'

import AOS from "aos"
import "aos/dist/aos.css"


const App = () => {
  const[orderPopup, setOrderPopup] = useState(false)

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
  <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Hero />
    <Products />
    <TopProducts />
    <Banner />
    <Subscribe />
    <Products />
    <Testimonials />
    <Footer />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
  </div>
  )
}

export default App