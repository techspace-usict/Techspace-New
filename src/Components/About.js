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
      className="d-flex flex-column justify-content-end align-items-center body"
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
    <main id="main" className='body'>
      {/* ======= About Section ======= */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h2>Our Vision</h2>
            <p>What We Aspire</p>
          </div>
          <div className="row" data-aos="fade-up">
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
      {/* ======= Team Section ======= */}
      <section id="team" className="team body">
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