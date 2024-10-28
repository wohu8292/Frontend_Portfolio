import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa";

const ProjectCard = ({name, text, img, tags}) => {
    return (
        <div>
            <a href="">
                <div
                    data-aos="fade-up" className='min-h-[400px] p-4 rounded2xl bg-primary/40 ring-1 ring-inset ring-zinc-50/5 rounded-2xl
    hover:bg-primary group'>
                    <figure className='bg-zinc-700 overflow-hidden mb-4 aspect-square rounded-lg'>
                        <img src={img} alt="" className='w-full h-full object-contain'/>
                    </figure>

                    <div className='flex items-center justify-between gap-4'>
                        <div>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-[22px] font-normal mb-4'>{name}</h3>
                            </div>
                            <div className='flex flex-wrap items-center gap-3'>
                                {
                                    tags.map((element, index) => (
                                        <span
                                            key={index}
                                            className='ring-offset-2 ring-2 h-6 text-sm bg-white grid items-center px-3 rounded-lg
                                            '>{element}</span>
                                    ))
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </a>
        </div>
    )
}

export default ProjectCard