import React from 'react'
import data from '../assets/products.json'
import { useState } from 'react'
import Product from './Product'
import "./Home.css"
function Home() {
    const [products] = useState(data)
  return (
    <div className='product-container'>
        {products.map((product)=>(
            <Product key={product.id} product={product} />
        ))}
    </div>
  )
}

export default Home