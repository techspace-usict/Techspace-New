import React from 'react'
import './CSS/style.css'
import { FaInstagram,FaLinkedinIn } from 'react-icons/fa'
import { useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';

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
      </main>
    {/* End #main */}
      
      {/* Gallery section */}

    {/* <div className = "d-flex justify-content-center w-50"> */}


    
    {/* <Carousel  variant="dark" className="mt-5 carouselFrame" fade>
      <Carousel.Item >
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel1.jpg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel2.jpg")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel3.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel4.jpg")}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel5.jpg")}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel6.jpg")}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel7.jpg")}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel8.JPG")}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item >
        <img
          className="w-100 carousel"
          src={require("./Images/Carousel10.JPG")}
          alt="First slide"
        />
        
      </Carousel.Item>
    </Carousel> */}
    {/* </div> */}



      {/* End Gallery Section */}

    
  </>
  </div>
  )
}

export default About