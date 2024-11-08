import React from 'react'
import {AiOutlineMessage} from "react-icons/ai";
import {TbMoodSearch} from "react-icons/tb";

import DarkMode from './DarkMode';
import QaPortfolio from './QaPortfolio'
import WebPortfolio from './WebPortfolio'
import Contact from '../Contact';

import { menuList } from './Data/data';

import {Routes, Route, Link} from 'react-router-dom';



const NavBar = () => {
    return (
        <div>
            <div className='fixed w-full z-50'>
                {/* upper navbar */}
                <div className='bg-primary py-3'>
                    <div className='container flex items-center justify-between'>
                        {/* homepage logo */}
                        <div>
                            <a href="" className='flex items-center gap-3'>
                                <div className='font-cursive text-2xl font-bold'>Woong Kyeol</div>
                                <AiOutlineMessage size={30}/>
                            </a>
                        </div>

                        {/* search bar */}
                        <div className='group relative'>
                            <input
                                type="text"
                                placeholder='search keyword...'
                                className='w-[200px] sm:w-[250px] rounded-full px-4
                    transition-all'/>
                            <TbMoodSearch
                                className='text-gray-500 group-hover:text-primary absolute top-[50%] right-3 -translate-y-1/2'/>
                        </div>

                        {/* darkmode */}
                        <div>
                            <DarkMode/>
                        </div>
                    </div>
                </div>

                {/* lower navbar */}
                <div>
                    <ul className='bg-primary/40 flex items-center justify-evenly gap-5 py-1'>
                        {
                            menuList.map((element) => (
                                <Link
                                    to={element.link}
                                    key={element.id}
                                    className='hover:bg-primary/80 w-full text-center cursor-pointer duration-300 text-sm transition-all '>
                                    {element.name}
                                </Link>
                            ))
                        }
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default NavBar