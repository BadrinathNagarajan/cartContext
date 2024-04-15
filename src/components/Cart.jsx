import React, { useEffect } from 'react'
import './Cart.css'
import { useState, useContext } from 'react'
import { cartContext } from '../App';

function Cart() {
    
  const {cart, setCart} = useContext(cartContext)
  const [Total, setTotal] = useState(0)
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+parseInt(curr.price),0))
  },[cart])
  return (
    <>
    <h1 className='cart-heading'> Cart Products</h1>
    <div className='cart-container'>
        {cart.map((product)=>(
        <div className="cart-product" key={product.id}>
            <div className='img'>
                <img src="https://placehold.co/100x100" alt="image"/>
            </div>
            <div className='cart-product-details'>
                <h3>Product Name:{product.title}</h3>
                <p>price Rs. {product.price}</p>
            </div>
        </div>))}
    </div>
    <h2>Total Amount : Rs {Total}</h2>
    </>
  )
}

export default Cart