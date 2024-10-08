import React from 'react'
import { ButtonPrimary } from './ButtonPrimary';

import exampleImage from '../Asset/exampleImage.jpg'


const sitemap = [
    {
      label: 'Home',
      href: '#home'
    },
    {
      label: 'About',
      href: '#about'
    },
    {
      label: 'Work',
      href: '#work'
    },
    {
      label: 'Reviews',
      href: '#reviews'
    },
    {
      label: 'Contact me',
      href: '#contact'
    }
  ];
  
  const socials = [
    {
      label: 'GitHub',
      href: 'https://www.github.com/codewithsadee-org'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/codewithsadee'
    },
    {
      label: 'Twitter X',
      href: 'https://x.com/codewithsadee_'
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/codewithsadee'
    },
    {
      label: 'CodePen',
      href: 'https://codepen.io/codewithsadee'
    }
  ];

const Footer = () => {
  return (
    <footer className='section'>
        <div className="container">

            <div className='lg:grid lg:grid-cols-2'>
                {/* title & button */}
                <div className='mb-10'>
                    <h2 className='headline-1 mb-8 lg:max-w-[12ch]'>
                        Let&apos;s work together today!
                    </h2>

                    <ButtonPrimary 
                    href="mailto:wohu8292@gmail.com"
                    label="Start proect"
                    icon="chevron_right"/>
                </div>

                {/* siteMap & socials */}
                <div className='grid grid-cols-2 gap-2 lg:pl-20'>
                    {/* Sitemap */}
                    <div>
                        <p className='mb-2'>Sitemap</p>
                        <ul>
                            {sitemap.map((object, index)=>(
                                <li key={index}>
                                    <a href={object.href} className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'>
                                        {object.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Socials */}
                    <div>
                        <p className='mb-2'>Socials</p>
                        <ul>
                            {socials.map((object, index)=>(
                                <li key={index}>
                                    <a 
                                    href={object.href} 
                                    className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                                    target='_blank'>
                                        {object.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* copyright */}
            <div className='flex items-center justify-between pt-10 mb-8'>
                <a 
                href=""
                className=''>
                    <img 
                    src={exampleImage}
                    alt="Logo"
                    width={40}
                    height={40} />
                </a>

                <p className='text-zinc-500 text-sm'>
                    &copy; 2024 <span className='text-zinc-200'>codewithsadee</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer