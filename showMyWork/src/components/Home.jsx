import React from 'react'
import Hero from './HomeComponents/Hero'

const Home = () => {
    return (
        <div>
            <div className='relative -z-50'>
                <div className='rounded-full absolute top-[200px] left-[200px] bg-primary w-64 h-64'></div>
            </div>
            <Hero/>
        </div>
    )
}

export default Home