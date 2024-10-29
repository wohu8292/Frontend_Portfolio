import React from 'react'
import {webProjectData} from '../Data/data'

const WebProject = () => {
    return (
        <div>
            <section className='topSection'>
                <div className='container'>
                    <div className='grid grid-cols-3 auto-rows-[300px] gap-2'>
                        {
                            webProjectData.map((element, index) => (
                                <div
                                    data-aos="flip-right"
                                    key={index}
                                    className={`bg-neutral-100 rounded-2xl p-2 flex flex-col items-center justify-center group hover:shadow-xl relative transition-all duration-300 
                        ${index == 0 || index == 3
                                        ? `col-span-2`
                                        : ''}`}>
                                    {/* image */}
                                    <div>
                                        <img src={element.img} alt="" className='absolute w-full h-full object-cover top-0 left-0' />
                                    </div>

                                    {/* text */}
                                    <div
                                        className='flex flex-col items-center justify-center absolute bg-zinc-200/75 p-3 rounded-md transition-opacity opacity-0 group-hover:opacity-100'>
                                        <h1 className='text-md font-bold font-cursive mb-3'>{element.title}</h1>
                                        <div className='opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center translate-y-[30%] group-hover:translate-y-0'>
                                            <div className='btn'>See work</div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </div>
            </section>
        </div>
    )
}

export default WebProject