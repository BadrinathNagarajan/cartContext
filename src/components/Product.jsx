import React from 'react'
import './Product.css'
import {useContext} from 'react'
import { cartContext } from '../App';

function Product({product}) {

    const {cart, setCart} = useContext(cartContext)
    const addcart = ()=>{
        setCart([...cart,product]);
    };
    
    const removecart = ()=>{
        setCart(cart.filter((c)=>c.id!==product.id));
    };

  return (
    <div className="product" key={product.id}>
       <div className="img">
        <img src={product.thumbnail}/>
       </div>
       <div className="details">
       <h1>{product.title}</h1>
       <h3>Price : {product.price}</h3>
       {cart.includes(product) ? (<button onClick={removecart}>Remove from cart</button>):(<button onClick={addcart}>Add to cart</button>)}
       </div>
    </div>
  )
}

export default Product