import React from 'react'
import './Club.css'
const Idroid = () => {
  return (
    <div className='body'>
    <section>
      <div className="content2">
        <div className="para">
          <h1 style={{ fontWeight: "bold" }}>Idroid</h1>
          <h3>
            Coddeschool welcomes you to the world of competitive programming and
            grow with us. As the situation changes the Competion of getting a job
            in Google,Microsoft are getting harder we will provide the right
            platform to beat the challenges.
          </h3>
        </div>
        <div className="img">
          <img src={require("./Images/idroid.png")} width="100vw" alt="" />
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
        borderBottom: "2px solid coral",
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
            <img alt="Deepanshu Johar" src={require("./Images/Abhay.png")} />
            <div className="desc fw-bold">
            Abhay Kulshrestha
              <br />
              Idroid-Lead
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Abhay Kulshrestha</h2>
        <h5 style={{ fontWeight: "bold" }}>Idroid-Lead</h5>
        <p>
          I am a first year CSE Undergrad Student, currently learning Mern Stack
          And The Relate Stuff. Hope You Like The Site And Give Me A Follow At
          Github 😀
        </p>
      </div>
    </section>
  </div>
  )
}

export default Idroid