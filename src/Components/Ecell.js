import React from 'react'
import './Club.css'
const Ecell = () => {
  return (
    <div className='body' onLoad={window.scroll({top: 0, behaviour: "auto"})}>
    <div>
    <section className="mt-5 club-about">
      <div className="content2">
        <div className="para">
          <h1 style={{ fontWeight: "bold" }}>Zenith Ecell</h1>
          <h3 className="my-4">
          Do you also have a start-up idea and don't know what to do next? Well, you are at the right place. 
          Entrepreneurship cell is here to help students having variant start-up ideas follow their dream and help them achieve their goals in it. 
          We aim to inspire students who wish to see a change in this world, a change for the better. We help them get the right investments by organizing fundraising rounds, 
          various fun competitions, and even workshops to promote the start-up culture among the students. 
          We help them build their network in the market from campus to incubators, seeding funds, and finally angel investors to transform the idea in their mind into a business.
          </h3>
        </div>
        <div className="img">
          <img src={require("./Images/ecell.png")} width="100vw" alt="" />
        </div>
      </div>
      <div className='papa-con' style={{ width: "90vw", height: "40vw", margin: "auto" }}>
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
            <img alt="Deepanshu Johar" src={require("./Images/Tanya-bg.png")} />
            <div className="desc fw-bold">
              Tanya Aggarwal
              <br />
              General Secretary
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Tanya Aggarwal</h2>
        <h5 style={{ fontWeight: "bold" }}>General Secretary</h5>
      
      </div>
      <div className="about-image">
        <div className="popout">
          <div className="circle">
            <img aria-hidden="true" src={require("./Images/back.png")} alt="Nature" />
          </div>
          <div className="person">
            <img alt="Deepanshu Johar" src={require("./Images/Jd-bg.png")} />
            <div className="desc fw-bold">
              Jatin Drall
              <br />
              Joint Secretary
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Jatin Drall</h2>
        <h5 style={{ fontWeight: "bold" }}>Joint Secretary</h5>
      
      </div>
    </section>
  </div>
  )
}

export default Ecell