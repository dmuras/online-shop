import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Image from 'next/image'

function About_us() {
  return (
    <div>
        <title>Info page</title>
        <Navbar/>
        <div className="about-container">
          <div className="beginnings">
            <div className="beginnings-text">
                <h2>Beginnings</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum. In iaculis nunc sed augue lacus. Lectus proin nibh nisl condimentum id venenatis. Integer eget aliquet nibh praesent tristique magna. Varius quam quisque id diam vel. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Euismod elementum nisi quis eleifend quam adipiscing. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Cras tincidunt lobortis feugiat vivamus at. Amet massa vitae tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae suscipit tellus mauris a diam.

Tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Nam libero justo laoreet sit amet cursus sit amet. Euismod lacinia at quis risus sed vulputate odio ut enim. Neque egestas congue quisque egestas diam in arcu cursus euismod. Eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molestie ac. Sed arcu non odio euismod. Imperdiet dui accumsan sit amet nulla facilisi. Bibendum neque egestas congue quisque egestas. Amet nisl purus in mollis nunc. Diam maecenas ultricies mi eget.</h3>
            </div>
            <div className="beginnings-photo">
              <Image src='/beginnings.webp' height={400} width={400} />
            </div>
          </div>
          <div className="founder">
            <div className="founder-text">
              <h2>Our founder</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum. In iaculis nunc sed augue lacus. Lectus proin nibh nisl condimentum id venenatis. Integer eget aliquet nibh praesent tristique magna. Varius quam quisque id diam vel. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Euismod elementum nisi quis eleifend quam adipiscing. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Cras tincidunt lobortis feugiat vivamus at. Amet massa vitae tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae suscipit tellus mauris a diam.

Tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Nam libero justo laoreet sit amet cursus sit amet. Euismod lacinia at quis risus sed vulputate odio ut enim. Neque egestas congue quisque egestas diam in arcu cursus euismod. Eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molestie ac. Sed arcu non odio euismod. Imperdiet dui accumsan sit amet nulla facilisi. Bibendum neque egestas congue quisque egestas. Amet nisl purus in mollis nunc. Diam maecenas ultricies mi eget.</h3>
            </div>
            <div className="founder-photo">
              <Image src='/founder.jpg' height={400} width={600} />
            </div>
          </div>
          <div className="activity">
            <div className="activity-photo">
              <Image src='/activity.jpg' height={400} width={500} />
            </div>
            <div className="activity-text">
              <h2>Activity on market</h2>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum. In iaculis nunc sed augue lacus. Lectus proin nibh nisl condimentum id venenatis. Integer eget aliquet nibh praesent tristique magna. Varius quam quisque id diam vel. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Euismod elementum nisi quis eleifend quam adipiscing. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Cras tincidunt lobortis feugiat vivamus at. Amet massa vitae tortor condimentum lacinia quis vel eros. Nunc congue nisi vitae suscipit tellus mauris a diam.

Tincidunt vitae semper quis lectus nulla at. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Nam libero justo laoreet sit amet cursus sit amet. Euismod lacinia at quis risus sed vulputate odio ut enim. Neque egestas congue quisque egestas diam in arcu cursus euismod. Eget magna fermentum iaculis eu non. At consectetur lorem donec massa sapien faucibus et molestie ac. Sed arcu non odio euismod. Imperdiet dui accumsan sit amet nulla facilisi. Bibendum neque egestas congue quisque egestas. Amet nisl purus in mollis nunc. Diam maecenas ultricies mi eget.</h3>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About_us
