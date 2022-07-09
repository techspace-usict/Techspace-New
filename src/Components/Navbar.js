import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css"

const Navbar = (props) => {

  function scroll2(){
    window.scrollTo(0,5000);
  }



  return (
    <div>
      <nav
        className="navbar navbar-expand-md navbar-shrink body"
        id="mainNav"
      >
        <div className="container body"
          id="navigation"
        >
          <Link
            className="navbar-brand d-flex align-items-center"
            to="/"
          >
            <img src={require("./Images/logo.png")} alt="" height="50vh" />
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span id="myNavTog"><svg xmlns="http://www.w3.org/2000/svg" width="" height="40" class="bi bi-list" id="nav-svg" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto" id="navigation" style={{ marginLeft: "50vw" }}>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={scroll2}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="mode" id="mode">
            <img
              id="theme"
              src={require("./Images/sun.png")}
              alt=""
              width="32px"
              style={{ cursor: "pointer", transition: "all .2s", width: "30px", height: "30px", transition: "all 0.2s" }}
              onClick={props.modeController}
            />
          </div>
        </div>
      </nav>
    </div>

  );
};

export default Navbar;
