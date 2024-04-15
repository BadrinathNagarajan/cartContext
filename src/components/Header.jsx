import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <>
    <div className='navbar'>
    <div className="Logo">CART</div>
    <ul>
        <li>
            <Link to={"/"}>Home</Link>
        </li>
        <li>
            <Link to={"/cart"}>View Cart</Link>
        </li>
    </ul>
    </div>
    </>
  )
}

export default Header