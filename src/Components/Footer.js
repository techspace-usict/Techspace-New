import React from 'react'
import './Footer.css'
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaTwitter} from "react-icons/fa"
const Footer = () => {
  return (
    <div>
    <footer class="footer-16371">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 text-center">
            <div class="footer-site-logo mb-4">
              <a href="/">Techspace</a>
            </div>
            <ul class="list-unstyled nav-links mb-5">
              <li><a rel='noreferrer' href="http://www.ipu.ac.in/" target="_blank">IPU</a></li>
              <li><a rel='noreferrer' href="https://medium.com/techspace-usict" target="_blank">Medium</a></li>
              <li><a rel='noreferrer' href="/about" target="_blank">About</a></li>
              <li><a rel='noreferrer' href="#clubs" target="_blank">Clubs</a></li>
            </ul>

            <div class="social mb-4">
              <h3>Stay in touch</h3>
              <ul class="list-unstyled">
                <li class="in"><a rel='noreferrer' href="https://www.instagram.com/techspace_usict/" target='_blank'><FaInstagram/></a></li>
                <li class="fb"><a rel='noreferrer' href="https://www.facebook.com/techspaceusict" target='_blank'><FaFacebookF/></a></li>
                <li class="tw"><a rel='noreferrer' href="https://twitter.com/infoxpression" target='_blank'><FaTwitter/></a></li>
                <li class="pin"><a rel='noreferrer' href="https://www.linkedin.com/company/techspace-usict/" target='_blank'><FaLinkedinIn/></a></li>
              </ul>
            </div>
            <div class="copyright">
              <p class="mb-0"><small>&copy; Techspace USICT. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer