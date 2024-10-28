import React from 'react'
import SkillCard from './SkillCard';
import { SiPlaywright } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiApachejmeter } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";



const skillItem = [
  {
    imgSrc: <SiPlaywright size={50} className="text-blue-500"/>,
    label: 'Playwright',
    desc: 'Test Automation'
  },
  {
    imgSrc: <SiSelenium size={50} className="text-blue-500"/>,
    label: 'Selenium',
    desc: 'Test Automation'
  },
  {
    imgSrc: <SiPostman size={50} className="text-blue-500"/>,
    label: 'Postman',
    desc: 'API testing'
  },
  {
    imgSrc: <SiApachejmeter size={50} className="text-blue-500"/>,
    label: 'Jmeter',
    desc: 'Performance testing'
  },
  {
    imgSrc: <SiCucumber size={50} className="text-blue-500"/>,
    label: 'Cucumber',
    desc: 'BDD testing'
  },
  {
    imgSrc: <SiMysql size={50} className="text-blue-500"/>,
    label: 'MySQL',
    desc: 'Test Data'
  },
  {
    imgSrc: <FaGithub size={50} className="text-blue-500"/>,
    label: 'Git',
    desc: 'Version Control'
  },
];

const Skills = () => {
  return (
    <section className='section'>
      <div className="container">
        <h2>Essential Tools I use</h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch]'>
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>
        <div className='grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]'>
          {skillItem.map((element, index)=>(
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