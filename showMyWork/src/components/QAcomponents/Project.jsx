import React from 'react'

import ProjectCard from './ProjectCard'

const projectData=[
    {
        id:1,
        name:"Playwright 2E2",
        tags:['Playwright', 'Regression test', ],
        text:`Lorem ipsum dolor sit amet consectetur adipisicing all elit, 
        quile aijoble solite rable ob fabloalias. magni at ops`,
        img:"https://picsum.photos/101/101",
    },
    {
        id:2,
        name:"MySQL to Json",
        tags: ['Selenium', 'MySQL', 'Test data'],
        text:`Lorem ipsum dolor sit amet consectetur adipisicing all elit, 
        quile aijoble solite rable ob fabloalias. magni at ops`,
        img:"https://picsum.photos/102/102",
    },
    {
        id:3,
        name:"Selenium 2E2",
        tags: ['Selenium', 'BDD', 'Regression test'],
        text:`Lorem ipsum dolor sit amet consectetur adipisicing all elit, 
        quile aijoble solite rable ob fabloalias. magni at ops`,
        img:"https://picsum.photos/103/103",
    },
    {
        id:4,
        name:"API testing",
        tags: ['Selenium', 'RestAssured'],
        text:`Lorem ipsum dolor sit amet consectetur adipisicing all elit, 
        quile aijoble solite rable ob fabloalias. magni at ops`,
        img:"https://picsum.photos/104/104",
    },    
]

const Project = () => {

  return (
    <section className='section'>
        <div className="container">
            {/* header section */}
            <div className='mb-3'>My QA Projects</div>

            {/* body section */}
            <div className='grid gap-x-8 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]'>
                {projectData.map((element)=>(
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