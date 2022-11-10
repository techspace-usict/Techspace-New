import React from 'react'
import './Club.css'
const cogitans = () => {
  return (
    <div className='body' onLoad={window.scroll({top: 0, behaviour: "auto"})}>
    <div>
    <section className='mt-5 club-about'>
      <div className="content2">
        <div className="para">
          <h1 style={{ fontWeight: "bold" }}>Cogitans</h1>
          <h3 className='article my-4 ' style={{fontFamily:"Montserrat"}}>
          Have you ever thought of making your website? 
          Well, being a part of growing India today we believe, 
          everyone at least once in their life had thought of making a full-fledged website from scratch.<br/>
          So why let it be a dream when Cogitans is here to help you make one. <br /><br /> It is a club under Techspace to promote Web Development
          among students to showcase their skills using languages like HTML, JAVASCRIPT, ReactJS, etc.
          Whatever image you have of your website in your head, we here will help you achieve the exact in real life by guiding you and giving you the 
          exact information for diving deep into this technology.

          </h3>
        </div>
        <div className="img">
          <img src={require("./Images/cogitans.png")} width="100vw" alt="" />
        </div>
      </div>
      <div className='papa-con' style={{ width: "90vw", height: "40vw", marginLeft: "5vw", marginRight: "5vw" }}>
        <div className="con">
          <div id="con1" className="image">
            <img
              src={require("./Images/cogitans-01.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con2" className="image">
            <img
              src={require("./Images/cogitans-02.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con3" className="image">
            <img
              src={require("./Images/cogitans-03.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con4" className="image">
            <img
              src={require("./Images/cogitans-04.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con5" className="image">
            <img
              src={require("./Images/cogitans-05.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    </div>
    <h1 className='club-lead'
      style={{
        margin: "auto",
        textAlign: "center",
        marginBottom: "4vh",
        marginTop: "4vh",
        fontWeight: "bold",
        borderBottom: "2px solid #6e5494",
        width: "25%"
      }}
    >
      Club Secretaries
    </h1>
    <section className="aboutt">
      <div className="about-image">
        <div className="popout">
          <div className="circle">
            <img aria-hidden="true" src={require("./Images/back.png")} alt="Nature" />
          </div>
          <div className="person">
            <img alt="Manas" src={require("./Images/Aditya-bg.png")} />
            <div className="desc fw-bold">
              Aditya 
              <br />
              General Secretary
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Aditya Warvadekar</h2>
        <h5 style={{ fontWeight: "bold" }}>General Secretary</h5>
        
      </div>

      <div className="about-image">
        <div className="popout">
          <div className="circle">
            <img aria-hidden="true" src={require("./Images/back.png")} alt="Nature" />
          </div>
          <div className="person">
            <img alt="Manas" src={require("./Images/Deeba1-bg.png")} />
            <div className="desc fw-bold">
              Deeba 
              <br />
              Joint Secretary
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Deeba Anwar Khan</h2>
        <h5 style={{ fontWeight: "bold" }}>Joint Secretary</h5>
        
      </div>
    </section>
  </div>
  )
}

export default cogitans