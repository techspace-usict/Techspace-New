import React from 'react'
import './Club.css'
const Idroid = () => {
  return (
    <div className='body' onLoad={window.scroll({top: 0, behaviour: "auto"})}>
    <div>

    <section className="mt-5 club-about">
      <div className="content2">
        <div className="para">
          <h1 style={{ fontWeight: "bold" }}>iDroid</h1>
          <h3 class="my-4">
          We, at iDroid help students, develop interactive and fun apps based on their ideas. Well, it is said that here you make apps and we make memories. 
          Our team works on Flutter, Java, and kotlin. 
          It creates an ecosystem where you as young developers can enjoy sessions and workshops on Android & iOS development which will help you have depth in your knowledge of additional development.
          </h3>
        </div>
        <div className="img">
          <img src={require("./Images/idroid.png")} width="100vw" alt="" />
        </div>
      </div>
      <div className='papa-con' style={{ width: "90vw", height: "40vw", margin: "auto" }}>
        <div className="con">
          <div id="con1" className="image">
            <img
              src={require("./Images/idroid1.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con2" className="image">
            <img
              src={require("./Images/idroid2.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con3" className="image">
            <img
              src={require("./Images/idroid3.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con4" className="image">
            <img
              src={require("./Images/idroid4.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con5" className="image">
            <img
              src={require("./Images/idroid5.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    </div>
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
      Club Secretaries
    </h1>
    <section className="aboutt">
      <div className="about-image">
        <div className="popout">
          <div className="circle">
            <img aria-hidden="true" src={require("./Images/back.png")} alt="Nature" />
          </div>
          <div className="person">
            <img alt="Deepanshu Johar" src={require("./Images/Tarun-bg.png")} />
            <div className="desc fw-bold">
            Tarun
              <br />
              General Secretary
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Tarun</h2>
        <h5 style={{ fontWeight: "bold" }}>General Secretary</h5>
      </div>
      <div className="about-image">
        <div className="popout">
          <div className="circle">
            <img aria-hidden="true" src={require("./Images/back.png")} alt="Nature" />
          </div>
          <div className="person">
            <img alt="Deepanshu Johar" src={require("./Images/Abhinav-bg.png")} />
            <div className="desc fw-bold">
            Abhinav 
              <br />
              Joint Secretary
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Abhinav</h2>
        <h5 style={{ fontWeight: "bold" }}>Joint Secretary</h5>
      </div>
    </section>
  </div>
  )
}

export default Idroid