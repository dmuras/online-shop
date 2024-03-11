import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="navbar-lt">
            <h3 style={{color: "white"}}><em>fastest shipping...</em></h3>
            <div className="navbar-logo">
                  <Image src="/shoppingCart.png"  height={50} width={50}/>
            </div>
        </div>
        <div className="navbar-menu">
            <Link className="link-element" href="/about_us"> <h2> About our shop </h2></Link>
            <Link className="link-element" href="/contact"> <h2> Contact us </h2></Link>
            <Link className="link-element" href="/register"> <h2> Register </h2> </Link>
            <Link className="cart" href="/cart"><Image src="/cart.png" height={50} width={50}/> </Link>
        </div>
    </div>
  )
}

export default Navbar
