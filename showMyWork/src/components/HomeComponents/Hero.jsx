import React from 'react'
import resume from '../../assets/resume.pdf'
import myPicture from '../../assets/myPicture.jpg'

import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Hero = () => {
    return (
        <section className='topSection'>
            <div
                 data-aos="flip-right" className='px-4 mx-auto lg:px-8 lg:max-w-2xl items-center lg:grid lg:grid-cols-2 lg:gap-10 rounded-3xl p-5 border border-red-300 backdrop-blur-lg bg-white/20'>
                <div className='flex-row place-items-center'>
                    <div className='flex items-center gap-1.5 text-sm tracking-wide'>
                        <span className='w-2 h-2 rounded-full bg-blue-500 relative'>
                            <span className='inset-0 rounded-full bg-blue-500 absolute animate-ping'></span>
                        </span>
                        Available for work
                    </div>
                    <h2 className='max-w-[23ch] mt-2 mb-9 text-center text-xl'>
                        Building modern websites and assure the qulity
                    </h2>
                    <div>
                        <a className="btn" download="WoongKyeol's" href={resume}>
                            <svg
                                class="fill-current w-4 h-4 mr-2"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Download CV</span>
                        </a>
                    </div>
                    <div className='flex gap-3 pt-8'>
                        <div>
                            <a href="https://github.com/wohu8292" target='_blank'>
                                <FaGithub
                                    size={30}
                                    className='text-black hover:text-blue-500 transition-all duration-300'/>
                            </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/woong-kyeol-huh-8b6981282/" target='_blank'>
                                <FaLinkedin
                                    size={30}
                                    className='text-black hover:text-blue-500 transition-all duration-300'/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <figure className='w-full max-w-[240px] ml-auto'>
                        <img src={myPicture} alt="my picture"/>
                    </figure>
                </div>

            </div>
        </section>
    )
}

export default Hero