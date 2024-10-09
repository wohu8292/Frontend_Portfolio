import React from 'react'
import exampleImg from '../Asset/exampleImg.jpg'

const Navbar = () => {
  return (
    <div>
      
      {/* upper Navbar */}
      <div className='bg-primary/40'>
        <div className='container flex justify-between items-center'>
          {/* homePage logo */}
          <div>
            <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>
              <img src={exampleImg} width={50} alt="Logo"/>
              Shopsy
            </a>
          </div>
          {/* seartchBar and orderButton */}
          <div>
            <div className='group'>
              <input type="text" placeholder='search' 
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all 
              duration-300 rounded-full border border-gray-300 px-2 py-1 
              focus:outline-none focus:border-primary focus:border-1"/>
            </div>
          </div>
        </div>
      </div>
      {/* lower Navbar */}
    </div>
  )
}

export default Navbar