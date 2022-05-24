import React, { useState } from 'react'
import './navbar.css'



const Navbar = () => {

    const [hide, sethide] = useState(false)

    const hideTrigger = () => {

        if (hide === true) {
            sethide(false);
        }
        else {
            sethide(true);
        }
    }



    return (

        <>


            <div class="Navbar">

                <div id="title">
                    <img src={require('./logo.png')} alt="" height="max-content" />
                </div>

                <h1 id="name">echspace</h1>

                <div class="links">
                    <h2 class="link" onClick={hideTrigger} > Clubs</h2>
                    <h2 class="link">Community</h2>
                    <h2 class="link">Events</h2>
                    <h2 class="link">Contact Us</h2>

                </div>

            </div>

            <div id="modal-con">

                {hide === true ?
                    <div class="modal" id="clubs">
                        <h1>hello</h1>
                    </div> : ''}
            </div>

        </>
    )
}

export default Navbar
