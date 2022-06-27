import React from 'react'
import './CSS/style.css'
import { FaInstagram,FaLinkedinIn } from 'react-icons/fa'
// import Prince from "./Images/Prince.jpg"
const About = () => {
  return (
    <div><>
    {/* ======= Hero Section ======= */}
    <section
      id="hero"
      className="d-flex flex-column justify-content-end align-items-center"
    >
      <div
        id="heroCarousel"
        data-bs-interval={5000}
        className="container carousel carousel-fade"
        data-bs-ride="carousel"
      >
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="carousel-container">
            <h2 className="animate__animated animate__fadeInDown">
              About <span>Us</span>
            </h2>
            <p className="animate__animated fanimate__adeInUp">
              Techspace is the “Of the students, By the students, For the
              students” technical society of USICT that works towards promoting
              discussion, creative collaboration, research and skill development.
            </p>
            <a
              href="#about"
              className="btn-get-started animate__animated animate__fadeInUp scrollto"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x={50}
            y={3}
            fill="rgba(255,255,255, .1)"
          ></use>
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x={50}
            y={0}
            fill="rgba(255,255,255, .2)"
          ></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
        </g>
      </svg>
    </section>
    {/* End Hero */}
    <main id="main">
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h2>Our Vision</h2>
            <p>What We Aspire</p>
          </div>
          <div className="row content" data-aos="fade-up">
            <div className="col-lg-6">
              <p>
                We aim to provide an environment where students can tinker with
                ideas, experiment and capitalize on the power of a strong
                community.
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> To inculcate the culture
                  of sharing knowledge and values
                </li>
                <li>
                  <i className="ri-check-double-line" /> To be the best place to
                  nurture oneself
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
              <a href="/" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
      {/* ======= Features Section ======= */}
      <section id="features" className="features">
        <div className="container">
          <ul className="nav nav-tabs row d-flex">
            <li className="nav-item col-3" data-aos="zoom-in">
              <a
                className="nav-link active show"
                data-bs-toggle="tab"
                href="#tab-1"
              >
                <i className="ri-gps-line" />
                <h4 className="d-none d-lg-block">
                  Modi sit est dela pireda nest
                </h4>
              </a>
            </li>
            <li
              className="nav-item col-3"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <a className="nav-link" data-bs-toggle="tab" href="#tab-2">
                <i className="ri-body-scan-line" />
                <h4 className="d-none d-lg-block">
                  Unde praesenti mara setra le
                </h4>
              </a>
            </li>
            <li
              className="nav-item col-3"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <a className="nav-link" data-bs-toggle="tab" href="#tab-3">
                <i className="ri-sun-line" />
                <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
              </a>
            </li>
            <li
              className="nav-item col-3"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <a className="nav-link" data-bs-toggle="tab" href="#tab-4">
                <i className="ri-store-line" />
                <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
              </a>
            </li>
          </ul>
          <div className="tab-content" data-aos="fade-up">
            <div className="tab-pane active show" id="tab-1">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>
                    Voluptatem dignissimos provident quasi corporis voluptates sit
                    assumenda.
                  </h3>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-1.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-2">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>
                    Neque exercitationem debitis soluta quos debitis quo mollitia
                    officia est
                  </h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Provident mollitia
                      neque rerum asperiores dolores quos qui a. Ipsum neque dolor
                      voluptate nisi sed.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-2.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-3">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>
                    Voluptatibus commodi ut accusamus ea repudiandae ut autem
                    dolor ut assumenda
                  </h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <ul>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Provident mollitia
                      neque rerum asperiores dolores quos qui a. Ipsum neque dolor
                      voluptate nisi sed.
                    </li>
                  </ul>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-3.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-4">
              <div className="row">
                <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                  <h3>
                    Omnis fugiat ea explicabo sunt dolorum asperiores sequi
                    inventore rerum
                  </h3>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum
                  </p>
                  <p className="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Duis aute irure dolor
                      in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="ri-check-double-line" /> Ullamco laboris nisi
                      ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-4.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Features Section */}
      {/* ======= Team Section ======= */}
      <section id="team" className="team">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h2>Team</h2>
            <p>Our Hardworking Team</p>
          </div>
          <div className="row ">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/vivek.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/vivekkbhatia/">
                    <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/vivek-bhatia-33484217a/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Vivek Bhatia</h4>
                  <span>Student Lead</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={100}>
                <div className="member-img">
                  <img
                    src={require("./Images/ridhi.jpg")}
                    className="img-fluid"
                    alt=""
                    style={{
                      height: "44vh !important",
                      objectFit: "cover !important"
                    }}
                  />
                  <div className="social">
                    <a href="https://www.linkedin.com/in/ridhi-bhat-6a9342192">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Ridhi</h4>
                  <span>Convener</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={200}>
                <div className="member-img">
                  <img
                    src={require("./Images/kartik.JPG")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/kartik_chaudhary__/">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Kartik</h4>
                  <span>Treasurer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={300}>
                <div className="member-img">
                  <img
                    src={require("./Images/prince.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/quantum_prince/">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/prince-kumar-gupta-a4214518a">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Prince Kr. Gupta</h4>
                  <span>Spokesperson</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center fw-bold mb-3" data-aos="fade-up">
            Club Leads
          </h3>
          <div className="row  club-leads">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/Himesh.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://instagram.com/himeshnayak.8">
                      <FaInstagram />
                    </a>
                    <a href="https://linkedin.com/in/himeshnayak015">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Himesh Nayak</h4>
                  <span>GDSC Lead</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={100}>
                <div className="member-img">
                  <img
                    src={require("./Images/Manas.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/manas_arora_04/">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/manas-arora-274b681b1">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Manas</h4>
                  <span>Cogitans Lead</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={200}>
                <div className="member-img">
                  <img
                    src={require("./Images/Abhay.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/abhayykulshrestha/">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/abhay-kulshrestha-7192121b9">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Abhay Kulshrestha</h4>
                  <span>Idroid Lead</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={300}>
                <div className="member-img">
                  <img
                    src={require("./Images/kunaal.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/kunnaal007/">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/kunnaal">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Kunaal</h4>
                  <span>Electrotech Lead</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row  club-leads">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/Shivank.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/shivank.ss/">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/shivank-sapra/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Shivank Sapra</h4>
                  <span>Turing AI</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={100}>
                <div className="member-img">
                  <img
                    src={require("./Images/Deepanshu.jpeg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/deepanshu_johar/">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/deepanshu-johar">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Deepanshu Johar</h4>
                  <span>Codeschool Lead</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={200}>
                <div className="member-img">
                  <img
                    src={require("./Images/Adarsh.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                  <div className="social">
                    <a href="https://www.instagram.com/adarsh.dhir/">
                      <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/adarshdhir/">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Adarsh Dheer</h4>
                  <span>Zenith Ecell Lead</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center fw-bold mb-3" data-aos="fade-up">
            Contributors
          </h3>
        </div>
      </section>
      {/* End Team Section */}
    </main>
    {/* End #main */}
  </>
  </div>
  )
}

export default About