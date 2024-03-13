import React from 'react'
import { useState } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Image from 'next/image'

const itemsList = [
  {
    id: 1,
    name: "computer",
    description: "good pc",
    price: 1500
  },
  {
    id: 2,
    name: "smartphone",
    description: "new smartphone",
    price: 500
  },
  {
    id: 3,
    name: "laptop",
    description: "gaming laptop",
    price: 1000
  }
]


export default function Home() {
  return (
    <>
      <title>Online shop</title>
      <Navbar/>
      <div className='container'>
        <div className='add-item'>
          <h1>ADD PRODUCT</h1>
        </div>
        <div className='items-container'>
          {
            itemsList.map((item) => (
              <div id={item.id} className='item-container'>
                <div className='item-photo'>
                  <Image src={`/${item.name}.png`} height={100} width={100}/>
                </div>
                <div className='item-info'>
                  <h2 className='info-element'>Title: {item.name}</h2>
                  <h3 className='info-element'>Describtion: {item.description}</h3>
                  <h3 className='info-element'>Price '$': {item.price}</h3>
                </div>
                <div className='shopping-options'>
                  <button className='shopping-button' style={{height: "fit-content", width: "fit-content", fontWeight: "bold", fontSize: "large", padding: "2vh", border: "solid black 2px", boxShadow: "5px 5px #black", cursor: "pointer"}}>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <Footer/>
    </>
  )
}
