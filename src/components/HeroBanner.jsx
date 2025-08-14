import React from 'react'
import banner from '../assets/HeroBanner.jpg'
const HeroBanner = () => {
    return (
        <div className='bg-gray-100 lg:pt-24 pt-16 '>
            <div className='relative max-w-7xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[550px] md:h-[600px] ' style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'Top' }}>
                <div className='absolute inset-0  md:rounded-2xl bg-black/50  flex items-center justify-center'>
                    <div className='text-center text-white px-4'>
                        <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>Where Style Meets You</h1>
                        <p className='text-lg md:text-xl mb-6 '>Lorem, ipsum dolor sit amet consectetur adipisicing </p>
                        <button className='bg-blue-500 hover:bg-blue-700 font-bold  text-white py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300 cursor-pointer '>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
