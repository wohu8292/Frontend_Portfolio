import React from 'react'
import PropTypes from 'prop-types'

const ratings = new Array(5)


const ReviewCard = ({content, name, imgSrc, company}) => {
  return (
    <div className=''>
        <div className=''>
            
        </div>
    </div>
  )
}

ReviewCard.propTypes={
    content: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
}

export default ReviewCard