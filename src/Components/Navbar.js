import React from 'react'
const Navbar = () => {
  return (
    <div>
    <nav
  className="navbar navbar-light navbar-expand-md navbar-shrink py-3"
  id="mainNav"
>
  <div className="container" id="navigation" style={{ overflow: "hidden" }}>
    <a className="navbar-brand d-flex align-items-center" href="team.html">
      <img src="resources/kaam_ki_photu/logo.png" alt="" height="50vh" />
    </a>
    <button
      data-bs-toggle="collapse"
      className="navbar-toggler"
      data-bs-target="#navcol-1"
    >
      <span className="visually-hidden">Toggle navigation</span>
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navcol-1">
      {/* <ul class="navbar-nav mx-auto"> */}
      {/* <li class="nav-item">
        <a class="nav-link" href="index.html">Community</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.html">Clubs</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.html">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="index.html">Contact Us</a>
      </li> */}
      {/* </ul> */}
      <ul className="navbar-nav mx-auto" style={{ marginLeft: "50vw" }}>
        {/* <li class="nav-item">
      <a class="nav-link" href="index.html">Community</a>
    </li> */}
        <li className="nav-item">
          <a className="nav-link" href="/" onclick="window.scrollTo(0, 1500)">
            Clubs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="infox.html">
            Events
          </a>
        </li>
        {/* <li class="nav-item">
      <a class="nav-link" href="index.html">Contact Us</a>
    </li> */}
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
  )
}

export default Navbar