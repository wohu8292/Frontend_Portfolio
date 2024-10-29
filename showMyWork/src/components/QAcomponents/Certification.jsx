import React from 'react'
import certification_picture from '../../assets/certification_picture.png'

import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Certification = () => {

    useGSAP(()=>{
        gsap.from('.certImg', {
          repeat:-1, 
          rotate:15, 
          duration:3, 
          ease: "bounce.inOut",
          yoyo: true 
        })
      }, )

  return (
    <section className='topSection'>
        <div className='container p-8 rounded-2xl grid lg:grid-cols-2 lg:gap-2 items-center justify-center'>

            {/* picture */}
            <div className='certImg'>
                <figure>
                    <img className="rounded-2xl" src={certification_picture} alt="istqb certification image" height={400} width={400}/>
                </figure>
            </div>

            {/* certification description */}
            <div>
                <div className='hidden lg:block'>
                    <p className='font-bold mb-5'>As a ISTQB certified QA engineer, I have understanding of ...</p>
                    <ul className='leading-7 text-sm'>
                        <li> Testing Principles</li>    
                        <li> Testing Process: STLC (Software Testing Life Cycle)</li>
                        <li> Test driven development vs Behavior driven Development</li>
                        <li> Test Levels: unit test - integration test - system test - acceptance test</li>
                        <li> Test Types: Functional Testing vs Non-functional Testing</li>
                        <li> Test Types: Static Testing vs Dynamic Testing</li>
                        <li> Techniques: Equivalence partition, Boundary value analysis, etc...</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Certification