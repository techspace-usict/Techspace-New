import React from "react";
import "./CSS/style.css";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";
// import Prince from "./Images/Prince.jpg"

const Team = (props) => {
  useEffect(() => {
    if (props.mode === "dark") {
      props.sudoMode();
    }
  }, []);

  return (
    <div>
      <>
        <main id="main" className="body">
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
                        src={require("./Images/Jatin.jpg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://www.instagram.com/cashlessjash/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/jatin-singh04/"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Jatin Singh
                      </p>
                      <p className="d-flex justify-content-center designation">
                        President
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div
                    className="member"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="member-img">
                      <img
                        src={require("./Images/Louis.jpg")}
                        className="individual"
                        alt=""
                        style={{
                          height: "44vh !important",
                          objectFit: "cover !important",
                        }}
                      />
                      <div className="social">
                      <a
                          rel="noreferrer"
                          href="https://www.instagram.com/louis_barsiwal/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/louisbarsiwal/"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">Louis Barsiwal</p>
                      <p className="d-flex justify-content-center designation">
                        Convener
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div
                    className="member"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="member-img">
                      <img
                        src={require("./Images/Aakash.jpg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                      <a
                          rel="noreferrer"
                          href="https://instagram.com/aakzsh"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://linkedin.com/in/aakzsh"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">Aakash Shrivastava</p>
                      <p className="d-flex justify-content-center designation">
                        Treasurer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div
                    className="member"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
                    <div className="member-img">
                      <img
                        src={require("./Images/Khushi.jpg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://www.instagram.com/_28khushii_/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/khushi-jaiswal-8a7920216"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Khushi
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Spokesperson
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="text-center fw-bold mt-5" data-aos="fade-up">
                Club Leads
              </h3>
              <div className="row  club-leads justify-content-around">
                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor: "#ffcccc"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Aditya.jpeg")}
                          className="member-img"
                          alt=""
                        />
                        <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/aditya_w_22/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/aditya-warvadekar-dl11k8532"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        <p className="memberName">Aditya Warvadekar</p>
                        <p className="designation">
                          General Secretary, Cogitans
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Deeba.png")}
                          className="member-img"
                          alt=""
                        />
                        <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/deeba-anwar-khan-7a5833215"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
                  <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Deeba Anwar Khan</p>
                        <p className="designation">Joint Secretary, Cogitans</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor: "#f4e9d5"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Tanya.jpg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        <p className="memberName">Tanya Aggarwal</p>
                        <p className="designation">
                          General Secretary, Zenith E-Cell
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/JatinDrall.jpeg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
                    <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Jatin Drall</p>
                        <p className="designation">Joint Secretary, Zenith E-Cell</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
              
            </div> */}
                </div>
              </div>
              <div className="row  club-leads">
                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex " style={{backgroundColor: "#ccffcc"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/siddarth.jpeg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        <p className="memberName">Siddharth</p>
                        <p className="designation">
                            General Secretary, Electrotech
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Priyanshu.jpg")}
                          className="member-img"
                          alt=""
                        />
                        <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/priyanshux_x/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/priyanshu-1b253b22a"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
                  <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Priyanshu</p>
                        <p className="designation">Joint Secretary, Electrotech</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor: "#dcccff"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Sonu.jpg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        <p className="memberName">Sonu Singla</p>
                        <p className="designation">
                          General Secretary, Codeschool
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Manik.jpg")}
                          className="member-img"
                          alt=""
                        />
                        <div className="social">
                          {/* <a
                            rel="noreferrer"
                            href="https://www.instagram.com//"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a> */}
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manik-goyal-29203a228"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
                    <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Manik Goyal</p>
                        <p className="designation">Joint Secretary, Codeschool</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
              
            </div> */}
                </div>
              </div>
              <div className="row  club-leads">
                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor: "#ccffff"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Tarun.jpeg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        <p className="memberName">Tarun</p>
                        <p className="designation">
                          General Secretary, iDroid
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Abhinav.jpg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
      <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Abhinav</p>
                        <p className="designation">Joint Secretary, iDroid</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor: "#fff5cc"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Gaganish.jpeg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        <p className="memberName">Gaganish Yadav</p>
                        <p className="designation">
                            General Secretary, Turing AI
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Shubham.jpg")}
                          className="member-img"
                          alt=""
                        />
                        <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
        <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Shubham Draveriya</p>
                        <p className="designation">Joint Secretary, Turing AI</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
  
</div> */}
                </div>
              </div>

{/* ///////////                               TEAM HEADS SECTION                   //////
/////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////// */}
              <h3 className="text-center fw-bold mt-5 mb-3" data-aos="fade-up">
                Team Heads
              </h3>

              <div className="row  club-leads">
                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor : "#ffe6ff"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Divyansh.jpg")}
                          className="member-img"
                          alt=""
                        />
                        <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/divy_3021/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/divyansh04/"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        <p className="memberName">Divyansh</p>
                        <p className="designation">
                            Technical Head
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/rig.jpeg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
      <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Rig Handa</p>
                        <p className="designation">Management Head</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor: "#fff5cc"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Harshita.jpeg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        <p className="memberName">Harshita Kohli</p>
                        <p className="designation">
                            Sponsors Head
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Aryaman.png")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
        <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Aryaman</p>
                        <p className="designation">Sponsors Head</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
  
</div> */}
                </div>
              </div>


              <div className="row  club-leads">
                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor : "#ffe6ff"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Ayus.jpeg")}
                          className="member-img"
                          alt=""
                        />
                        <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/ayush__baliyan/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/ayush-baliyan-4a2242146/"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        <p className="memberName">Ayush Baliyan</p>
                        <p className="designation">
                            Graphics Head
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Utkarsh.jpg")}
                          className="member-img"
                          alt=""
                        />
                        <div className="social">
                          {/* <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a> */}
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/utkarsh-rai-943777224"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div>
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
      <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Utkarsh Rai</p>
                        <p className="designation">Vice Head, Graphics</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor: "#fff5cc"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Harshit.jpg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        <p className="memberName">Harshit Mittal</p>
                        <p className="designation">
                            Research Head
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Prabhat.jpg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/manas-arora-274b681b1"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
        <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Prabhat</p>
                        <p className="designation">Content Head</p>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
  
</div> */}
                </div>
              </div>

              <div className="row  club-leads">
                <div className="col-lg-12 col-md-12 d-flex align-items-stretch justify-content-center">
                  <div className="clubBG d-flex" style={{backgroundColor : "#ffe6ff"}}>
                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Yusuf.jpg")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/ayush__baliyan/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/ayush-baliyan-4a2242146/"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        <p className="memberName">Yusuf Khan</p>
                        <p className="designation">
                            Marketing Head
                        </p>
                      </div>
                    </div>

                    <div
                      className="member"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <div className="member-img">
                        <img
                          src={require("./Images/Sangam.png")}
                          className="member-img"
                          alt=""
                        />
                        {/* <div className="social">
                          <a
                            rel="noreferrer"
                            href="https://www.instagram.com/manas_arora_04/"
                            target="_blank"
                          >
                            <FaInstagram />
                          </a>
                          <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/utkarsh-rai-943777224"
                            target="_blank"
                          >
                            <FaLinkedinIn />
                          </a>
                        </div> */}
                      </div>
                      <div className="member-info">
                        {/* <h4 className="d-flex justify-content-center">Manas</h4>
      <span className="d-flex justify-content-center">Cogitans Lead</span> */}
                        <p className="memberName">Sangam Manav Jha</p>
                        <p className="designation">Media Head</p>
                      </div>
                    </div>
                  </div>
                </div>

                
              </div>

{/* ////////////////                            CONTRIBUTORS SECTION                   //////////////////////// */}
              <h3 className="text-center fw-bold mt-5 mb-3" data-aos="fade-up">
                Contributors
              </h3>
              <div className="row ">
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member contributor-card" data-aos="fade-up">
                    <div className="member-img">
                      <img
                        src={require("./Images/Aakash.jpg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://instagram.com/aakzsh"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://linkedin.com/in/aakzsh"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Aakash Shrivastava
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member contributor-card" data-aos="fade-up">
                    <div className="member-img">
                      <img
                        src={require("./Images/Ayus.jpeg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://www.instagram.com/ayush__baliyan/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/ayush-baliyan-4a2242146/"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Ayush Baliyan
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member contributor-card" data-aos="fade-up">
                    <div className="member-img">
                      <img
                        src={require("./Images/dhruv.jpg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://www.instagram.com/dhruv._0810/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/dhruv-gupta-55034a228/"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Dhruv Gupta
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member contributor-card" data-aos="fade-up">
                    <div className="member-img">
                      <img
                        src={require("./Images/Divyansh.jpg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://www.instagram.com/divy_3021/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/divyansh04/"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Divyansh
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center">
                  <div className="member contributor-card" data-aos="fade-up">
                    <div className="member-img">
                      <img
                        src={require("./Images/Gurjot.jpg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://www.instagram.com/gajrela_26/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/gurjot-kaur-ab6bb0228"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Gurjot Kaur
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Content Writer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center ">
                  <div className="member contributor-card" data-aos="fade-up">
                    <div className="member-img">
                      <img
                        src={require("./Images/jayden.jpg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://www.instagram.com/kartikkc397/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/kartik-singh-68bb8b179/"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Kartik Singh
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center ">
                  <div className="member contributor-card" data-aos="fade-up">
                    <div className="member-img">
                      <img
                        src={require("./Images/Aditya.jpeg")}
                        className="individual"
                        alt=""
                      />
                      <div className="social">
                        <a
                          rel="noreferrer"
                          href="https://www.instagram.com/aditya_w_22/"
                          target="_blank"
                        >
                          <FaInstagram />
                        </a>
                        <a
                          rel="noreferrer"
                          href="https://www.linkedin.com/in/aditya-warvadekar-dl11k8532/"
                          target="_blank"
                        >
                          <FaLinkedinIn />
                        </a>
                      </div>
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Aditya Warvadekar
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 d-flex align-items-stretch justify-content-center ">
                  <div className="member contributor-card" data-aos="fade-up">
                    <div className="member-img">
                      <img
                        src={require("./Images/Deeba.png")}
                        className="individual"
                        alt=""
                      />
                      
                    </div>
                    <div className="member-info">
                      <p className="d-flex justify-content-center memberName">
                        Deeba Anwar Khan
                      </p>
                      <p className="d-flex justify-content-center designation">
                        Web Developer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    </div>
  );
};

export default Team;
