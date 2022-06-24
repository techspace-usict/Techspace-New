import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-light navbar-expand-md navbar-shrink py-3"
        id="mainNav"
      >
        <div className="container"
          id="navigation"
          style={{ overflow: "hidden" }}
        >
          <Link
            className="navbar-brand d-flex align-items-center"
            to="team.html"
          >
            <img src="resources/kaam_ki_photu/logo.png" alt="" height="50vh" />
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
            <ul className="navbar-nav mx-auto" style={{ marginLeft: "50vw" }}>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/club"
                  onclick="window.scrollTo(0, 1500)"
                >
                  Clubs
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/infox">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="mode" id="mode">
            <img
              id="theme"
              src="resources/kaam_ki_photu/sun.png"
              alt=""
              width="32px"
              style={{ cursor: "pointer", transition: "all .2s" }}
              onclick="changeTheme('night')"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
