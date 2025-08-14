import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from './Breadcrum'
import ProductDisplay from './ProductDisplay'
import DiscriptionBox from './DiscriptionBox'
import NewCollection from './NewCollection'

const SingleProduct = () => {
    const {all_product} = useContext(ShopContext)
const { productId } = useParams();
const product = all_product.find(e => e.id === Number(productId));

useEffect(()=> {
  window.scrollTo(0,0)
},[])

  return (
    <div className='max-w-7xl mx-auto mb-32 mt-32'>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <NewCollection/>
    </div>
  )
}

export default SingleProduct

