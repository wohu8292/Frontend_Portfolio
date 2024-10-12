import React from 'react'
import exampleImg from '../Asset/exampleImg.jpg'
import { FaStar } from "react-icons/fa";


const productData = [
    {
        id:1,
        img:exampleImg,
        title:'Women Ethnic',
        rating: 5.0,
        author: "white",
        aosDelay: "0",
    },
    {
        id:2,
        img:exampleImg,
        title:'Women Western',
        rating: 4.5,
        author: "red",
        aosDelay: "200",
    },
    {
        id:3,
        img:exampleImg,
        title:'Goggles',
        rating: 4.7,
        author: "brown",
        aosDelay: "400",
    },
    {
        id:4,
        img:exampleImg,
        title:'Printed T-Shirt',
        rating: 4.4,
        author: "yellow",
        aosDelay: "600",
    },
    {
        id:5,
        img:exampleImg,
        title:'Printed T-Shirt',
        rating: 4.5,
        author: "pink",
        aosDelay: "800",
    },
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
        <div className='container'>
            {/* header section */}
            <div className='text-center mb-10 max-w-[600px] mx-auto'>
                <p data-aos="fade-up" className='text-sm text-primary'>
                    Top Selling Products for you
                </p>
                <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                <p data-aos="fade-up" className='text-xs text-gray-400'>
                    blablablabla
                </p>
            </div>

            {/* body section */}
            <div>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {/* card section */}
                    {productData.map((product)=>(
                        <div 
                        data-aos="fade-up" 
                        data-aos-delay={product.aosDelay}
                        key={product.id} 
                        className='space-y-3'>
                            <img src={product.img} alt=""
                            className='h-[220px] w-[150px] object-cover rounded-md' />
                            <div>
                                <h3 className='font-semibold'>{product.title}</h3>
                                <p className='text-sm text-gray-600 '>{product.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className="text-yellow-400" />
                                    <span>{product.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Products