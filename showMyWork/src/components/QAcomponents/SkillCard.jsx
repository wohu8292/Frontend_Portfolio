import React from 'react'
import PropTypes from 'prop-types'

const SkillCard = ({imgSrc,label,desc}) => {
  return (
    <div data-aos="fade-up"  className="flex items-center gap-3 ring-2 ring-inset p-3 hover:bg-zinc-800  ring-zinc-50/10
    transition-all duration-300 hover:text-blue-200 rounded-xl">
      <div>
        {imgSrc}  
      </div>  
      
      <div>
        <h3>{label}</h3>
        <p>{desc}</p>
      </div>
    </div>
  )
}

SkillCard.propTypes={
  imgSrc: PropTypes.object,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default SkillCard