import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import Item from './Item'

const TopSeller = () => {
    const { all_product } = useContext(ShopContext)
    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>

            <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>Top Sellers</h2>
            <p className='text-center mt-3 md:px-56'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni quidem obcaecati, earum voluptatem cumque incidunt nisi reprehenderit corrupti veniam. </p>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-1 px-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {all_product.slice(0, 12).map((product) => {
                return  <Item key={product.id} product={product}/>
})}
            </div>

        </div>
    )
}

export default TopSeller
