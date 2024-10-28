import React from 'react'
import Contact from '../Contact'
import {Link} from 'react-router-dom'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <section className='bg-red-500 md:px-28'>
                <div
                    className='flex flex-col items-center justify-between px-6 py-3 mx-auto space-y-12 md:flex-row md:space-y-0'>
                    <h2
                        className='md:text-2xl font-cursive font-bold leading-tight text-2xl text-white md:max-w-xl md:text-left'>Need to speak with experts?</h2>
                    <div className='flex justify-center items-center'>
                        <Link
                            to="/Contact"
                            className='p-1 px-6 pt-2 text-red-500 rounded-full bg-white shadow-2xl hover:bg-zinc-800 hover:text-blue-200'>Contact Me</Link>
                    </div>
                </div>
            </section>
            <div className='bg-gray-900 md:px-28'>
                <div>
                    <div className='flex gap-11 py-3 justify-center'>
                        <div>
                            <a href="">
                                <FaGithub size={30} className='text-white hover:text-blue-200'/>
                            </a>
                        </div>
                        <div>
                            <a href="">
                                <FaLinkedin size={30} className='text-white hover:text-blue-200'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer