import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='navbar-container'>
        <div className="navbar-lt">
                <h4 style={{color: "white"}}><em>fastest shipping...</em></h4>
        <div className="navbar-logo">
                <Image src="/shoppingCart.png"  height={50} width={50}/>
        </div>
        </div>
        <div className="navbar-menu">
            <Link className="cart" href="/cart"><Image src="/cart.png" height={50} width={50}/> </Link>
        </div>
    </div>
  )
}

export default Navbar
