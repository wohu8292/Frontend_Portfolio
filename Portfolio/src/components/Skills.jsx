import React from 'react'

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
            <h2 headline-2>Essential Tools I use</h2>
            <p className=''>Discover the powerful tools and technologies I use to create exceptional, 
                high-performing websites & applications.
            </p>
            <div className=''>
                {skillItem.map((object, index)=>{
                    
                })}
            </div>

        </div>
    </section>
  )
}

export default Skills