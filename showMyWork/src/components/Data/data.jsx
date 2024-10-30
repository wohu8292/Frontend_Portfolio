import commercial_Web from '../../assets/commercial_Web.png'
import portfolio2 from '../../assets/portfolio2.png'

import { FaHtml5 } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaJs } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";


import { SiPlaywright } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiApachejmeter } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { SiCucumber } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const qaSkills = [
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

  const webSkills = [
    {
      imgSrc: <FaHtml5 size={50} className="text-blue-500"/>,
      label: 'Html',
    },
    {
      imgSrc: <RiTailwindCssFill size={50} className="text-blue-500"/>,
      label: 'Tailwind Css',
    },
    {
      imgSrc: <FaJs size={50} className="text-blue-500"/>,
      label: 'Js',
    },
    {
      imgSrc: <FaReact size={50} className="text-blue-500"/>,
      label: 'React',
    }
  ];

const webProjectData = [
    {
        title: 'Commercial Website',
        value: 14.0,
        height: 32,
        img: commercial_Web,
    },
    {
        title: 'Portfolio Website',
        value: 120000.5,
        height: 42,
        img: portfolio2,
    },
    {
        title: 'Commercial Website',
        value: 5000,
        height: 54,
        img:"https://picsum.photos/103/103",
    },
    {
        title: 'Commercial Website',
        value: 75000,
        height: 34,
        img:"https://picsum.photos/104/104",
    },
]

const qaProjectData = [
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


export {webProjectData, qaProjectData, qaSkills, webSkills}