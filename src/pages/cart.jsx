import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import {addedItems} from './index.jsx'
import Image from 'next/image'

function Cart() {
  return (
    <div>
      <Navbar/>
      <title>Cart</title>
      <div className="cart-container">
        <div className="cart-items">
          {
            addedItems.map((aItem) => (
              <div id={aItem.id} className='aitem-container'>
              <div className='aitem-photo'>
                <Image src={`/${aItem.name}.png`} height={100} width={100}/>
              </div>
              <div className='aitem-info'>
                <h2 className='ainfo-element'>Title: {aItem.name}</h2>
                <h3 className='ainfo-element'>Describtion: {aItem.description}</h3>
                <h3 className='ainfo-element'>Price '$': {aItem.price}</h3>
              </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Cart