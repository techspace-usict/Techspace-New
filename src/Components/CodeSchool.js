import React from 'react'
import './Club.css'
const CodeSchool = () => {
  return (
    <div className='body' onLoad={window.scroll({top: 0, behaviour: "auto"})}>
    <section className='mt-5 club-about'>
      <div className="content2">
        <div className="para">
          <h1 style={{ fontWeight: "bold" }}>Codeschool</h1>
          <h3 className='article my-4'>
          Are you passionate about competitive programming? Code school is the right place for you. Code School is a platform that encourages enthusiastic 
          coders and provides them with the opportunity to showcase their problem-solving skills. 
          Not just this it even educates the students on different topics on Data Structures and Algorithms by conducting sessions ranging from basic to advanced levels.
          </h3>
        </div>
        <div className="img">
          <img src={require("./Images/code_school.png")} width="100vw" alt="" />
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
              src={require("./Images/codeschool-03.jpg")}
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
    <h1 className='club-lead'
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
            <img alt="Deepanshu Johar" src={require("./Images/Sonu-bg.png")} />
            <div className="desc fw-bold">
              Sonu Singla
              <br />
              General Secretary
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Sonu Singla</h2>
        <h5 style={{ fontWeight: "bold" }}>General Secretary</h5>
        
      </div>
      <div className="about-image">
        <div className="popout">
          <div className="circle">
            <img aria-hidden="true" src={require("./Images/back.png")} alt="Nature" />
          </div>
          <div className="person">
            <img alt="Deepanshu Johar"   src={require("./Images/Manik-bg.png")} />
            <div className="desc fw-bold">
              Manik Goyal
              <br />
              Joint Secretary
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Manik Goyal</h2>
        <h5 style={{ fontWeight: "bold" }}>Joint Secretary</h5>
        
      </div>
    </section>
  </div>
  )
}

export default CodeSchool