import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
        <div className='footer-container'>
            <div className='logos'>
                <Image className="logo" src="/facebook.png"  height={30} width={30}/>
                <Image className="logo" src="/instagram.png"  height={30} width={30}/>
                <Image className="logo" src="/linkedin.png"  height={30} width={30}/>
                <Image className="logo" src="/twitter.png"  height={30} width={30}/>
                <Image className="logo" src="/youtube.png"  height={30} width={30}/>
            </div>
            <div className='info'>
                <div className='main-info'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In dictum non consectetur a erat nam at. At augue eget arcu dictum varius duis at consectetur lorem. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Orci sagittis eu volutpat odio. Lectus sit amet est placerat in egestas. Urna duis convallis convallis tellus id. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Mi eget mauris pharetra et. Neque sodales ut etiam sit amet nisl purus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget. Blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada. Hendrerit gravida rutrum quisque non tellus orci ac auctor augue. Lorem ipsum dolor sit amet consectetur adipiscing elit. Tempus quam pellentesque nec nam.
                    Suscipit adipiscing bibendum est ultricies integer quis auctor elit. In ornare quam viverra orci sagittis. Amet mauris commodo quis imperdiet. Enim facilisis gravida neque convallis a cras semper. Tincidunt eget nullam non nisi est sit. Felis eget nunc lobortis mattis aliquam faucibus purus. Lobortis feugiat vivamus at augue eget arcu dictum. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Fusce ut placerat orci nulla pellentesque dignissim. Nisl nisi scelerisque eu ultrices vitae.</p>
                </div>
                <div className='copyright'>
                    <Image src="/copyright.png"  height={15} width={15}/>
                    <p> 2021 Breyer Law Offices, P.C. - All rights reserved.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer
