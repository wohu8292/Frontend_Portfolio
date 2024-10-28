import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

import { BrowserRouter } from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:700,
      easing:"ease-in-sine",
      delay:100
    })
    AOS.refresh()
  },[])

  return (
    <BrowserRouter>
      <NavBar />
      <Footer />
    </BrowserRouter>
  )
}

export default App
