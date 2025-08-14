import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from './Item';

const NewCollection = () => {
    const { NewCollection } = useContext(ShopContext); // 🔧 FIXED: useContext

    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl'>
            <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-serif'>
                New Collection
            </h2>
            <p className='text-center mt-3 md:px-56'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam magni quidem obcaecati, earum voluptatem cumque incidunt nisi reprehenderit corrupti veniam.
            </p>
            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-1 px-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {NewCollection.map((product) => (
                    <Item key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default NewCollection;
