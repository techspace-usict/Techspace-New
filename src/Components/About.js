import React from 'react'
import './CSS/style.css'
import { FaInstagram,FaLinkedinIn } from 'react-icons/fa'
import { useEffect } from 'react'
// import Prince from "./Images/Prince.jpg"



const About = (props) => {

  useEffect(() => {
    if(props.mode === 'dark'){
      props.sudoMode()
    }
  }, [])
  






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
              students” technical society of USICT that work towards promoting
              discussion, creative collaboration, research and skill development.
            </p>
            <a rel='noreferrer'
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
            <div className="col-lg-6" style={{width: "70%"}}>
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
            {/* <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div> */}
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
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/vivekkbhatia/"  target = "_blank">
                    <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/vivek-bhatia-33484217a/" target = "_blank">
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
                    className="member-img"
                    alt=""
                    style={{
                      height: "44vh !important",
                      objectFit: "cover !important"
                    }}
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.linkedin.com/in/ridhi-bhat-6a9342192" target = "_blank">
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
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/kartik_chaudhary__/" target = "_blank">
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
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/quantum_prince/" target = "_blank">
                      <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/prince-kumar-gupta-a4214518a" target = "_blank">
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
                    src={require("./Images/Aakash.jpg")}
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/aakzsh/" target = "_blank">
                      <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/aakzsh/" target = "_blank">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Aakash Shrivastava</h4>
                  <span>GDSC Lead</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member" data-aos="fade-up" data-aos-delay={100}>
                <div className="member-img">
                  <img
                    src={require("./Images/Manas.jpg")}
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/manas_arora_04/" target = "_blank">
                      <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/manas-arora-274b681b1" target = "_blank">
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
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/abhayykulshrestha/" target = "_blank">
                      <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/abhay-kulshrestha-7192121b9" target = "_blank">
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
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/kunnaal007/" target = "_blank">
                      <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/kunnaal" target = "_blank">
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
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/shivank.ss/" target = "_blank">
                      <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/shivank-sapra/" target = "_blank">
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
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/deepanshu_johar/" target = "_blank">
                      <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/deepanshu-johar" target = "_blank">
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
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/adarsh.dhir/" target = "_blank">
                      <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/adarshdhir/" target = "_blank">
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
          <div className="row ">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member contributor-card" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/Aakash.jpg")}
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://instagram.com/aakzsh"  target = "_blank">
                    <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://linkedin.com/in/aakzsh" target = "_blank">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Aakash Shrivastava</h4>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member contributor-card" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/Ayus.jpeg")}
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/ayush__baliyan/"  target = "_blank">
                    <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/ayush-baliyan-4a2242146/" target = "_blank">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Ayush Baliyan</h4>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member contributor-card" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/dhruv.jpg")}
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/dhruv._0810/"  target = "_blank">
                    <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/dhruv-gupta-55034a228/" target = "_blank">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Dhruv Gupta</h4>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member contributor-card" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/Divyansh.jpg")}
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/_divi2.0/"  target = "_blank">
                    <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/divyansh-787533211/" target = "_blank">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Divyansh</h4>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member contributor-card" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/Gurjot.jpg")}
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/gajrela_26/"  target = "_blank">
                    <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/gurjot-kaur-ab6bb0228" target = "_blank">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Gurjot Kaur</h4>
                  <span>Content Writer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div className="member contributor-card" data-aos="fade-up">
                <div className="member-img">
                  <img
                    src={require("./Images/jayden.jpg")}
                    className="member-img"
                    alt=""
                  />
                  <div className="social">
                    <a rel='noreferrer' href="https://www.instagram.com/kartikkc397/"  target = "_blank">
                    <FaInstagram />
                    </a>
                    <a rel='noreferrer' href="https://www.linkedin.com/in/kartik-singh-68bb8b179/" target = "_blank">
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>Kartik Singh</h4>
                  <span>Web Developer</span>
                </div>
              </div>
            </div>
            </div>
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