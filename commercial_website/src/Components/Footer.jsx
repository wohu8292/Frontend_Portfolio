import React from 'react'
import exampleImg from '../Asset/exampleImg.jpg'

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";

const exampleImage = {
  backgroundImage:`url(${exampleImg})`,
  backgroundPosition: "bottom",
  backgroundRepeat:"no-repeat",
  backgroundSize:"cover",
  height:"100%",
  width:"100%"
}

const footerLink = [
  {
    title:"Home",
    link:"/#",
  },
  {
    title:"About",
    link:"/#about",
  },
  {
    title:"Contact",
    link:"/#contact",
  },
  {
    title:"Blog",
    link:"/#blog",
  },
]

const Footer = () => {
  return (
    <div style={exampleImage} className='text-white mb-20'>
      <div className='container'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-4 pt-5'>
          {/* company details */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify
            mb-3 flex items-center gap-3'>
              <img src={exampleImg} alt="" className='max-w-[50px]' />
              Shopsy
            </h1>
            <p>
              paragraph, paragraph
            </p>
          </div>

          {/* nav link */}
          <div className='grid grid-cols-2 sm:grid-cols-2 col-span-2 md:pl-10'>

            <div>
              <div className='py-8 px-4'>
                <h1
                className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>
                  Links
                </h1>
                <ul className='flex flex-col gap-3'>
                  {footerLink.map((link)=>(
                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}
            <div className='grid-cols'>
              {/* iconBox */}
              <div className='flex items-center gap-3 mt-6'>
                <a href="#">
                  <FaInstagram className='text-3xl'/>
                </a>
                <a href="#">
                  <FaFacebook className='text-3xl'/>
                </a>
                <a href="#">
                  <FaLinkedin className='text-3xl'/>
                </a>
              </div>

              {/* locationBox */}
              <div className='mt-6'>
                <div className='flex items-center gap-3'>
                  <FaLocationArrow />
                  <p>Wheat Ridge, Colorado</p>
                </div>
                <div className='flex items-center gap-3'>
                  <FaMobileAlt />
                  <p>+01 012-345-6789</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer