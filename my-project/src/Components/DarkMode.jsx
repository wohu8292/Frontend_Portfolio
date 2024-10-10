import React, { useEffect, useState } from 'react'
import exampleImg from "../Asset/exampleImg.jpg"

const DarkMode = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): 'light');  
  const element = document.documentElement

  useEffect(()=>{
    if(theme === 'dark'){
        element.classList.add('dark')
        localStorage.setItem("theme", "dark")
    }else{
        element.classList.remove("dark")
        localStorage.setItem("theme", "light")
    }
  }, [theme])

  return (
    <div className='relative'>
        <img src={exampleImg} alt="" height={40} width={40}
        className={`cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme==='dark'? "opacity-0": "opacity-100"}`}
        onClick={()=>setTheme(theme==='light'? 'dark': 'light')}/>
        <img src={exampleImg} alt="" height={40} width={40}
        className='cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300'
        onClick={()=>setTheme(theme==='light'? 'dark': 'light')}/>
    </div>
  )
}

export default DarkMode