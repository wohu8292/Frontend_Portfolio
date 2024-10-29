import React from 'react'

import ProjectCard from './ProjectCard'
import { qaProjectData } from '../Data/data'

const Project = () => {

  return (
    <section className='section'>
        <div className="container">
            {/* header section */}
            <div className='mb-3 font-bold'>My QA Projects</div>

            {/* body section */}
            <div className='grid gap-x-8 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]'>
                {qaProjectData.map((element)=>(
                    <ProjectCard 
                    key={element.id}
                    name={element.name}
                    text={element.text}
                    tags={element.tags}
                    img={element.img} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Project