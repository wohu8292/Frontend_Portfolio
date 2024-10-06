import React from 'react'
import SkillCard from './SkillCard';

const skillItem = [
    {
      imgSrc: '/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skills = () => {
  return (
    <section className='section'>
        <div className='container'>
            <h2 className='headline-2'>Essential Tools I use</h2>
            <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>Discover the powerful tools and technologies I use to create exceptional, 
                high-performing websites & applications.
            </p>
            <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
                {skillItem.map((object, index)=>(
                    <SkillCard
                    key={index}
                    imgSrc={object.imgSrc}
                    label={object.label}
                    desc={object.desc}
                     />
                ))
              }
            </div>

        </div>
    </section>
  )
}

export default Skills