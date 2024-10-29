import React from 'react'
import SkillCard from './SkillCard';

const Skills = ({datas}) => {
  return (
    <section className='section'>
      <div className="container">
        <h2 className='font-bold'>Essential Tools I use</h2>
        <p className='mt-3 mb-8 max-w-[50ch] text-sm'>
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {datas.map((element, index)=>(
            <SkillCard
            key={index}
            imgSrc={element.imgSrc}
            label={element.label}
            desc={element.desc}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills