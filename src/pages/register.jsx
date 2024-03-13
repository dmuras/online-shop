import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

function Register() {
  return (
    <div>
        <title>Register</title>
        <Navbar/>
        <div className="login-form">
          <form>
            <h1>LOGIN</h1>
            <div className="content">
              <div className="input-field">
                <input type="email" placeholder="Email"/>
              </div>
              <div className="input-field">
                <input type="password" placeholder="Password"/>
              </div>
              <p>Forgot Your Password?</p>
            </div>
            <div className="action">
              <button className='login-button'>LOGIN</button>
            </div>
          </form>
        </div>
        <Footer/>
    </div>
  )
}

export default Register
