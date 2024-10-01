import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import Navbar from './Navbar'

const Header = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full h-20 flex items-center z-40 
    bg-gradient-to-b from bg-zinc-900 to-zinc-900/0'>
        <div className='max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,3fr,1fr]'>
          <h1>
            <a href="/" className='logo'>
              이미지 삽입
            </a>
          </h1>

        <div>
          <div >
            <div className='md:hidden relative md:justify-self-center menu-btn'>
              <Hamburger onClick={null} />
            </div>
            <span className='material-symbols-rounded'>menu</span>
          </div>
          <Navbar />
        </div>

          <a href="#contact" className='btn btn-secondary max-md:hidden md:justify-self-end'>Contact Me</a>
        
        </div>
    </header>
  )
}

export default Header