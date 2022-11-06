import React from 'react'
import './CSS/style.css'
import { FaInstagram,FaLinkedinIn } from 'react-icons/fa'
import { useEffect } from 'react'
// import Prince from "./Images/Prince.jpg"



const Team = (props) => {

  useEffect(() => {
    if(props.mode === 'dark'){
      props.sudoMode()
    }
  }, [])
  






  return (
    <div>
    <>
    <main id="main" className='body'>
    <section id="team" className="team body">
        <div className="container">
          <div className="section-title" data-aos="zoom-out">
            <h2>Team</h2>
            <p>Our Hardworking Team</p>
          </div>
          <div className="row ">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Vivek Bhatia</h4>
                  <span className="d-flex justify-content-center">Student Lead</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Ridhi</h4>
                  <span className="d-flex justify-content-center">Convener</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Kartik</h4>
                  <span className="d-flex justify-content-center">Treasurer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Prince Kr. Gupta</h4>
                  <span className="d-flex justify-content-center">Spokesperson</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center fw-bold mb-3" data-aos="fade-up">
            Club Leads
          </h3>
          <div className="row  club-leads">
            {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Aakash Shrivastava</h4>
                  <span className="d-flex justify-content-center">GDSC Lead</span>
                </div>
              </div>
            </div> */}
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Manas</h4>
                  <span className="d-flex justify-content-center">Cogitans Lead</span>
                </div>
              </div>
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
                  <h4 className="d-flex justify-content-center">Abhay Kulshrestha</h4>
                  <span className="d-flex justify-content-center">Idroid Lead</span>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
              
            </div> */}


            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Kunaal</h4>
                  <span className="d-flex justify-content-center">Electrotech Lead</span>
                </div>
              </div>
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
                  <h4 className="d-flex justify-content-center">Shivank Sapra</h4>
                  <span className="d-flex justify-content-center">Turing AI</span>
                </div>
              </div>
            </div>


            {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
              
            </div> */}

          </div>
          <div className="row  club-leads">
            
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Deepanshu Johar</h4>
                  <span className="d-flex justify-content-center">Codeschool Lead</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Adarsh Dheer</h4>
                  <span className="d-flex justify-content-center">Zenith Ecell Lead</span>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-center fw-bold mb-3" data-aos="fade-up">
            Contributors
          </h3>
          <div className="row ">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Aakash Shrivastava</h4>
                  <span className="d-flex justify-content-center">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Ayush Baliyan</h4>
                  <span className="d-flex justify-content-center">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Dhruv Gupta</h4>
                  <span className="d-flex justify-content-center">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Divyansh</h4>
                  <span className="d-flex justify-content-center">Web Developer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
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
                  <h4 className="d-flex justify-content-center">Gurjot Kaur</h4>
                  <span className="d-flex justify-content-center">Content Writer</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center ">
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
                  <h4 className="d-flex justify-content-center">Kartik Singh</h4>
                  <span className="d-flex justify-content-center">Web Developer</span>
                </div>
              </div>
            </div>
            </div>
        </div>
      </section>
      </main>
    </>
  </div>
  )
}

export default Team