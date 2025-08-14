import React, { useContext, useState } from 'react'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props
    const {addToCart} = useContext(ShopContext)

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20 md:gap-30 px-6 md:px-0'>
            <div className='flex md:1/2 gap-4'>
                <div className='flex flex-col gap-4 md:h[500px] '>
                    <img src={product.image} alt="" className='md:h-[163px] w-[100px]' />
                    <img src={product.image2} alt="" className='md:h-[163px] w-[100px]' />
                    <img src={product.image1} alt="" className='md:h-[163px] w-[100px]' />
                    <img src={product.image3} alt="" className='md:h-[163px] w-[100px]' />
                </div>
                <div>
                    <img src={product.image} alt="" className='md:h-[580px]' />
                </div>
            </div>
            <div className='flex md:1/2 flex-col mt-8 md:mt-0'>
                <h1 className='text[#3d3d3d] text-4xl font-bold '>{product.name}</h1>
                <div className='flex items-center gap-1 text-[#1c1c1c] text-lg mt-4'>
                    <Star fill='gold' />
                    <Star fill='gold' />
                    <Star fill='gold' />
                    <Star fill='gold' />
                    <Star fill='gray' />
                    <p>(951)</p>
                </div>
                
                <div className='flex gap-5 font-semibold items-center my-5'>
                    <div className='text-gray-500 text-2xl line-through'>${product.old_price}</div>
                    <div className='text-red-400 text-3xl '>${product.new_price}</div>
                </div>
                <div className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos cumque omnis ad amet maxime ipsa unde quo? Sapiente, magnam voluptate. Repudiandae, illum maiores? Obcaecati iusto voluptas</div>
                <div >
                    <h1 className='font-semibold text-gray-500 text-2xl mt-4'>Select Size</h1>
                    <div className='flex gap-4 items-center my-4'>
                        <div className='border rounded-2xl hover:text-white hover:bg-blue-500   bg-gray-100 p-4'>S </div>
                        <div className='border rounded-2xl hover:text-white hover:bg-blue-500 bg-gray-100 p-4'>M </div>
                        <div className='border rounded-2xl hover:text-white hover:bg-blue-500   bg-gray-100 p-4'>L </div>
                        <div className='border rounded-2xl hover:text-white hover:bg-blue-500   bg-gray-100 p-4'>XL </div>
                        <div className='border rounded-2xl hover:text-white hover:bg-blue-500   bg-gray-100 p-4'>XXL </div>
                    </div>
                </div>
                <Link to='/Cart'>
                    <button onClick={()=>addToCart(product.id)} className='bg-blue-500 rounded-2xl hover:bg-blue-700 text-white font-semibold px-6 py-3 my-4 w-max'>ADD TO CART</button>
                </Link>
                <p><span className='font-semibold'>Category</span>Women, Tshirt, Crop top</p>
                <p><span className='font-semibold'>Tags</span>Modern, Latest </p>

            </div>
        </div>

    )
}

export default ProductDisplay
