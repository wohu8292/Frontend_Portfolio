import React from 'react'
import WebProject from './WebComponents/WebProject'
import Skills from './QAcomponents/Skills'
import { webSkills } from './Data/data'

const WebPortfolio = () => {
  return (
    <div>
      <WebProject />
      <Skills datas={webSkills} />
    </div>
  )
}

export default WebPortfolio