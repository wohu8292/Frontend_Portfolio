import React from 'react'

import Certification from './QAcomponents/Certification'
import Skills from './QAcomponents/skills'
import Project from './QAcomponents/Project'
import { qaSkills } from './Data/data'

const QaPortfolio = () => {
  return (
    <div>
      <Certification />
      <Skills datas={qaSkills}/>
      <Project />
    </div>
  )
}

export default QaPortfolio