import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import {addedItems} from './index.jsx'

function Cart() {
  return (
    <div>
      <Navbar/>
      <title>Cart</title>
      <div className="cart-container">
        <div className="cart-items">
          {
            addedItems.map((aItem) => (
              <div className="cartItem" id={aItem.id}>
                <h1>{aItem.id}</h1>
                <h1>{aItem.name}</h1>
                <h1>{aItem.description}</h1>
                <h1>{aItem.price}</h1>
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