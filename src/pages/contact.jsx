import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'

function Contact() {
  return (
    <div>
        <title>Contact</title>
        <Navbar/>
        <div className="contact-container">
          <div className="contact-text">
              <h2>In case of any problems, please contact us</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum. In iaculis nunc sed augue lacus. Lectus proin nibh nisl condimentum id venenatis. Integer eget aliquet nibh praesent tristique magna. Varius quam quisque id diam vel. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Euismod elementum nisi quis eleifend quam adipiscing. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Cras tincidunt lobortis feugiat vivamus at. Amet massa vitae tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae suscipit tellus mauris a diam.</h3>
              <h2>If you have any problem you can inform us on your own</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum. In iaculis nunc sed augue lacus. Lectus proin nibh nisl condimentum id venenatis. Integer eget aliquet nibh praesent tristique magna. Varius quam quisque id diam vel. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Euismod elementum nisi quis eleifend quam adipiscing. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Cras tincidunt lobortis feugiat vivamus at. Amet massa vitae tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae suscipit tellus mauris a diam.</h3>
          </div>
          <div className="contact-form">
            <form>      
            <input name="name" type="text" className="feedback-input" placeholder="Name" />   
            <input name="email" type="text" className="feedback-input" placeholder="Email" />
            <textarea name="text" className="feedback-input" placeholder="Comment"></textarea>
            <input type="submit" value="SUBMIT"/>
            </form>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
