import React from 'react'
import { useEffect } from 'react'
import './Club.css'

const Turing = () => {

  useEffect(() => {
    
    // scrollTo(0,
  }, [])
  


  return (
    <div className='body' onLoad={window.scroll({top: 0, behaviour: "auto"})}>
    <div>

    <section className="mt-5 club-about">
      <div className="content2">
        <div className="para">
          <h1 style={{ fontWeight: "bold" }}>Turing AI</h1>
          <h3>
          Be it Artificial intelligence or Machine learning, Turing AI has got you. From interactive learning sessions to developing projects, it has got all. 
          Various domains like Computer vision, natural language, etc., from basic to advanced are covered and are made so interesting that even the one with zero interest 
          in coding might learn a thing or two.
          </h3>
        </div>
        <div className="img">
          <img src={require("./Images/Turing.png")} width="100vw" alt="" />
        </div>
      </div>
      <div className='papa-con' style={{ width: "90vw", height: "40vw", margin: "auto" }}>
        <div className="con">
          <div id="con1" className="image">
            <img
              src={require("./Images/AI1.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con2" className="image">
            <img
              src={require("./Images/AI2.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con3" className="image">
            <img
              src={require("./Images/AI3.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con4" className="image">
            <img
              src={require("./Images/AI4.jpg")}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              alt=""
            />
          </div>
          <div id="con5" className="image">
            <img
              src={require("./Images/AI5.jpg")}
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
      Club lead
    </h1>
    <section className="aboutt">
      <div className="about-image">
        <div className="popout">
          <div className="circle">
            <img aria-hidden="true" src={require("./Images/back.png")} alt="Nature" />
          </div>
          <div className="person">
            <img alt="Shivank Sapra" src={require("./Images/Shivank.png")} />
            <div className="desc fw-bold">
              Shivank Sapra
              <br />
              Turing AI-Lead
            </div>
          </div>
        </div>
      </div>
      <div className="aboutme" style={{ marginTop: "4vh" }}>
        <h2 style={{ fontWeight: 550 }}>Shivank Sapra</h2>
        <h5 style={{ fontWeight: "bold" }}>Turing AI-Lead</h5>
        <p>
        "Technology will never replace great teachers but technology in the hands of great teachers is transformational."

         -- George Couras
        </p>
      </div>
    </section>
  </div>
  )
}

export default Turing