import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <title>Online shop</title>
      <Navbar/>
      <div className='container'>
        <div className='items-list'>
          <h1>items</h1>
        </div>
      </div>
      <Footer/>
    </>
  )
}
