import React from "react";
import "./Footer.css";
// import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Footer = () => {
  // function scroll(){
  //   window.scrollTo(1000,1000);
  // }
  return (
    <div>
    <footer className="footer-16371 body">
      <hr />
        <div className="row justify-content-center">
          <div className="col-md-9 text-center">
            <div className="footer-site-logo mb-4">
              <a href="/">Techspace</a>
            </div>
            <ul className="list-unstyled nav-links mb-5">
              <li><a rel='noreferrer' href="http://www.ipu.ac.in/" target="_blank" style={{color: "#6e5494"}}>GGSIPU</a></li>
              <li><a rel='noreferrer' href="https://medium.com/techspace-usict" target="_blank"  style={{color: "#6e5494"}}>Medium</a></li>
              <li><a rel='noreferrer' href="/about" style={{color: "#6e5494"}}>About</a></li>
              {/* <li><a rel='noreferrer' href="/" onClick={scroll} target=""  style={{color: "#6e5494"}}>Clubs</a></li> */}
            </ul>

            <div className="social mb-4">
              <h3 style={{color:"#6e5494"}}>Stay in touch</h3>
              <ul className="list-unstyled">
                <li className="in"><a rel='noreferrer' href="https://www.instagram.com/techspace_usict/" target='_blank'><FaInstagram/></a></li>
                <li className="fb"><a rel='noreferrer' href="https://www.facebook.com/techspaceusict" target='_blank'><FaFacebookF/></a></li>
                <li className="tw"><a rel='noreferrer' href="https://twitter.com/infoxpression" target='_blank'><FaTwitter/></a></li>
                <li className="pin"><a rel='noreferrer' href="https://www.linkedin.com/company/techspace-usict/" target='_blank'><FaLinkedinIn/></a></li>
              </ul>
            </div>
            <div className="copyright">
              <p className="mb-0"><small>&copy; Techspace USICT. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
