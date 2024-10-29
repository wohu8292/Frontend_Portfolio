import NavBar from "./components/NavBar"
import Footer from "./components/Footer";

import Home from "./components/Home";
import WebPortfolio from "./components/WebPortfolio";
import QaPortfolio from "./components/QaPortfolio";
import Contact from "./Contact";

import {BrowserRouter} from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

function App() {

    useEffect(() => {
        AOS.init({offset: 100, duration: 700, easing: "ease-in-sine", delay: 100})
        AOS.refresh()
    }, [])

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/WebPortfolio" element={<WebPortfolio />}/>
              <Route path="/QaPortfolio" element={<QaPortfolio />}/>
              <Route path="/Contact" element={<Contact />}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App
