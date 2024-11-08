import React from 'react'
import exampleImg from '../resource/exampleImg.jpg'

const Post = () => {
    return (
        <div className='post'>
            <div className="image">
                <img src={exampleImg} alt=""/>
            </div>
            <div className="texts">
                <h2>Full-house battery backup coming later this year</h2>
                <p className="info">
                    <a href="" className="author">Woong Huh</a>
                    <time>2024-01-01 12:00</time>
                </p>
                <p className=''>description</p>
            </div>
        </div>
    )
}

export default Post