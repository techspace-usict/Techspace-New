import React from "react";
import { Link } from "react-router-dom";
import "./CSS/Navbar.css"

const Navbar = () => {

  function scroll(){
    window.scrollTo(0,1000);
  }
  function scroll2(){
    window.scrollTo(0,5000);
  }

  var theme = "day";

  function changeTheme() {
    if (theme === "day") {
      console.log("Changed theme run to night");
      document.getElementById("theme").src = require("./Images/moon-icon.png")
      console.log("Hey2")
      console.log("hey")
      var bodylist = document.getElementsByClassName("body")
      for (let index = 0; index < bodylist.length; index++) {
        const element = bodylist[index];
        console.log(element)
        element.style.backgroundColor = "black"
        element.style.color = "whitesmoke"
        document.getElementById("navigation").style.color = "green !important";
      }
      // document.getElementById("body").style.backgroundColor = "black";
      // document.getElementById("body").style.color = "white";
      // document.getElementById("mainNav").style.backgroundColor = "black";
      // document.getElementById("mainNav").classList.add
      // document.getElementById("mainNav").classList.remove = "navbar-light";
      // document.getElementById("mainNav").classList.add("navbar-dark");
      // document.getElementById("header").style.backgroundColor = "black";
      theme = "night";
    }
    else {
      console.log("changing to day mode");
      console.log(theme)
      document.getElementById("theme").src = require("./Images/sun.png")
      // document.getElementById("body").style.backgroundColor = "white";
      // document.getElementById("body").style.color = "black";
      // document.getElementById("mainNav").style.backgroundColor = "white";
      // document.getElementById("header").style.backgroundColor = "white";
      // document.getElementById("mainNav").classList.remove = "navbar-dark";
      // document.getElementById("mainNav").classList.add("navbar-light");
      bodylist = document.getElementsByClassName("body")
      for (let index = 0; index < bodylist.length; index++) {
        const element = bodylist[index];
        console.log(element)
        element.style.backgroundColor = "whitesmoke"
        element.style.color = "black"
        console.log(element)
        console.log(element.style.color);
        document.getElementById("navigation").style.color = "black !important";
      }
      theme = "day"
    };
  }


  return (




    <div>
      <nav
        className="navbar navbar-expand-md navbar-shrink body"
        id="mainNav"
      >
        <div className="container body"
          id="navigation"
          style={{ overflow: "hidden" }}
        >
          <Link
            className="navbar-brand d-flex align-items-center"
            to="team.html"
          >
            <img src={require("./Images/logo.png")} alt="" height="50vh" />
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-1"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">
            <ul className="navbar-nav mx-auto" id="navigation" style={{ marginLeft: "50vw"}}>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="#"
                  onClick={scroll}
                >
                  Clubs
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
              style={{ cursor: "pointer", transition: "all .2s", width: "30px", height: "30px"}}
            onClick={changeTheme}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
