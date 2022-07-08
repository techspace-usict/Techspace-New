import React from 'react'
import './Club.css'
const Electrotech = () => {
  return (
    <div className='body'>
    <section className="mt-5 club-about">
      <div className="content2">
        <div className="para">
          <h1 style={{ fontWeight: "bold" }}>Electrotech</h1>
          <h3>
          Have you ever had the question “ What If?”. Electro Tech will help you answer this for most of the situations in your life. 
          We hear will teach you and hone you with skills based on these little things that control us- so-called “ Microcontrollers?”
          </h3>
        </div>
        <div className="img">
          <img src={require("./Images/electrotech.png")} width="100vw" alt="" />
        </div>
      </div>
      <div style={{ width: "90vw", height: "40vw", margin: "auto" }}>
        <div className="con">
          <div id="con1" className="image">
            <img
              src={require("./Images/codeschool-01.JPG")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con2" className="image">
            <img
              src={require("./Images/codeschool-02.JPG")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con3" className="image">
            <img
              src={require("./Images/codeschool-03.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con4" className="image">
            <img
              src={require("./Images/cogitans-03.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con5" className="image">
            <img
              src={require("./Images/registration.JPG")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <h1
      style={{
        margin: "auto",
        textAlign: "center",
        marginBottom: "0vh",
        marginTop: "4vh",
        fontWeight: "bold",
        borderBottom: "2px solid #6e5494",
        width: "15%"
      }}
    >
      Club lead
    </h1>
    <section className="aboutt">
      <div className="about-image">
        <div className="popout">
          <div className="circle">
            <img aria-hidden="true" src={require("./Images/back.png")} alt="Nature" />
          </div>
          <div className="person">
            <img alt="Deepanshu Johar" src={require("./Images/kunaal.png")} />
            <div className="desc fw-bold">
              Kunnaal
              <br />
              Cogitans-Lead
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Kunnaal</h2>
        <h5 style={{ fontWeight: "bold" }}>Electrotech-Lead</h5>
        <p>
        “Rivers know this: there is no hurry. We shall get there some day.”  ~ A.A. Milne
        </p>
      </div>
    </section>
  </div>
  )
}

export default Electrotech