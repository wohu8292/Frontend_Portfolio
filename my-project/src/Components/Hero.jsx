import React from 'react'
import exampleImg from '../Asset/exampleImg.jpg'
import Slider from "react-slick";

var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnFocus: true,
    pauseOnHover: false,
  };

const ImageList=[
    {
        id: 1,
        img: {exampleImg},
        title: "Upto 50% off on all Men's Wear",
        description: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph"
    },
    {
        id: 2,
        img: {exampleImg},
        title: "30% off on all Women's Wear",
        description: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph"
    },
    {
        id: 3,
        img: {exampleImg},
        title: "70% off on all Products Sale",
        description: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph"
    },
]

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-400 flex justify-center
    items-center dark:bg-gray-950 dark:text-white duration-200' style={{border:"1px solid gray"}}>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl -z-9 rotate-45'>

        </div>
        {/* hero section */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {ImageList.map((item)=>(
                    <div key={item.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/* text context */}
                            <div className='flex flex-col justify-center items-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1 
                                data-aos="zoom-out"
                                data-aos-duration="500"
                                data-aos-once="true"
                                className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{item.title}</h1>
                                <p 
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="100"
                                className='text-sm'>{item.description}
                                </p>
                                <div
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="300"
                                >
                                    <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105
                                    duration-200 text-white py-2 px-4 mt-4 rounded-full'>
                                        Order Now
                                    </button>
                                </div>
                            </div>

                            {/* image section */}
                            <div className='order-1 sm:order-2'>
                                <div 
                                data-aos="zoom-in"
                                data-aos-once="true"
                                className='relative z-5'
                                >
                                    <img src={exampleImg} alt="" 
                                    className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto'/>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            
        </div>
    </div>
  )
}

export default Hero