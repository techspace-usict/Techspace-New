import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Hero.css'



const Home = () => {
  return (
    <div className='body' style={{ width: "100vw", }}>
      <header className="py-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-flex justify-content-center align-items-center mb-4">
              <div style={{ maxWidth: 450 }}>
                <h2 className="fw-bold">Best place to nurture yourself</h2>
                <p className="my-3">
                  <b>LET'S JOIN HANDS</b>
                </p>
                <div className="my-2">
                  {/* <button
                    className="btn btn-info shadow"
                    type="submit"
                    data-bs-toggle="modal"
                  > */}
                    {/* Join Us
                  </button> */}
                  {/* <button type="button" class="btn btn-info shadow" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Join Us
                  </button> */}
                  <a href="https://forms.gle/JesetsSR5NF4TXXd8" target="_blank">
                  <button type="button" class="btn btn-info shadow">
                    Join Us
                  </button>
                  </a>
                  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                      <div class="modal-content" id='myModal'>
                        <div class="modal-header" >
                          {/* <h5 class="modal-title" id="exampleModalLabel">Oops...</h5> */}
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="modal-body">
                          Recruitments are not open right now. Stay tuned to hear from us!
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 myconatiner">
              <div className="py-5 mx-lg-5">
                <img className="rounded shadow fit-cover heroImage" src={require("./Images/main_page.jpg")} alt='' />
              </div>

            </div>
          </div>
        </div>
      </header>
      <section className="pb-5">
        <div className="container text-center py-5" style={{paddingRight: "0px", paddingLeft: "0px"}}>
          <p className="mb-4" style={{ fontSize: "1.6rem" }}>
            Having{" "}
            <span className="p-1">
              <strong>6</strong>
            </span>
            &nbsp;societies under our umbrella.
          </p>
          <Link to="/">
            <img
              className="m-3 clubImg"
              src={require("./Images/cogitans.png")}
              alt=''
            />
          </Link>
          <Link to="/">
            <img
              className="m-3 clubImg"
              src={require("./Images/code_school.png")}
              alt=''
            />
          </Link>
          <Link to="/">
            <img
              className="m-3 clubImg"
              src={require("./Images/ecell.png")}
              alt=''
            />
          </Link>
          <Link to="/">
            <img
              className="m-3 clubImg"
              src={require("./Images/electrotech.png")}
              alt=''
            />
          </Link>
          {/* <Link to="/">
            <img
              className="m-3 clubImg"
              src={require("./Images/gdsc.png")}
              alt=''
            />
          </Link> */}
          <Link to="/">
            <img
              className="m-3 clubImg"
              src={require("./Images/idroid.png")}
              alt=''
            />
          </Link>
          <Link to="/">
            <img
              className="m-3 clubImg"
              src={require("./Images/Turing.png")}
              alt=''
            />
          </Link>
        </div>
      </section>
      <section>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold text-success mb-2">Our Clubs</p>
              <h3 className="fw-bold">Clubs at a glance</h3>
            </div>
          </div>
          <div className="container py-5">
            <div className="mx-auto" style={{ maxWidth: 900 }}>
              <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">
                <div className="col mb-4">
                  <div
                    className="card card-2 "
                    style={{ backgroundColor: "rgba(135, 231, 228, 0.2)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-primary card-text mb-2">
                        Turing AI
                      </p>
                      <h5 className="fw-bold card-title mb-3">
                      Be it Artificial intelligence or Machine learning, Turing AI has got you.
                      </h5>
                      <Link to="turing">
                        <button className="btn btn-info btn-sm" type="button">
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div
                    className="card  card-2"
                    style={{ backgroundColor: "rgba(241, 205, 170, 0.2)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-secondary card-text mb-2">
                        Code School
                      </p>
                      <h5 className="fw-bold card-title mb-3">
                      Are you passionate about competitive programming? Code school is the right place for you. 
                      </h5>
                      <Link to="codeschool">
                        <button className="btn btn-info btn-sm" type="button">
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div
                    className="card card-2"
                    style={{ backgroundColor: "rgba(136, 97, 228, 0.2)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-info card-text mb-2">Cogitans</p>
                      <h5 className="fw-bold card-title mb-3">
                      Have you ever thought of making your website?
                      </h5>
                      <Link to="cogitans">
                        <button className="btn btn-info btn-sm" type="button">
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div
                    className="card card-2"
                    style={{ backgroundColor: "rgba(188, 237, 188, 0.2)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-info card-text mb-2">iDroid</p>
                      <h5 className="fw-bold card-title mb-3">
                      We, at iDroid help students develop interactive and fun apps based on their ideas. 
                      </h5>
                      <Link to="idroid">
                        <button className="btn btn-info btn-sm" type="button">
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div
                    className="card card-2"
                    style={{ backgroundColor: "rgba(236, 176, 176, 0.199)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-info card-text mb-2">
                        Electrotech
                      </p>
                      <h5 className="fw-bold card-title mb-3">
                      We here will teach you and hone you with skills based on these little things that control us:- so-called “Microcontrollers”.
                      </h5>
                      <Link to="electrotech">
                        <button className="btn btn-info btn-sm" type="button">
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div className="col mb-4">
                  <div
                    className="card card-2"
                    style={{ backgroundColor: "rgba(255, 131, 255, 0.207)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-info card-text mb-2">
                        GDSC
                      </p>
                      <h5 className="fw-bold card-title mb-3">
                      This beautiful club is responsible for conducting multiple events, involving 500+ students from USICT as well as from other colleges.
                      </h5>
                      <Link to="gdsc">
                        <button className="btn btn-info btn-sm" type="button">
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div> */}
                <div className="col mb-4">
                  <div
                    className="card card-2"
                    style={{ backgroundColor: "rgba(65, 105, 225, 0.201)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-info card-text mb-2">
                        Zenith E-cell
                      </p>
                      <h5 className="fw-bold card-title mb-3">
                      Do you also have a start-up idea and don’t know what to do next? Well, you are at the right place.
                      </h5>
                      <Link to="ecell">
                        <button className="btn btn-info btn-sm" type="button">
                          Learn more
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-2">
        <div className="container">
          <div className="row mb-4 mb-lg-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <p className="fw-bold text-success mb-2">Our Leads</p>
              <h2 className="fw-bold">Faculty Leads</h2>
            </div>
          </div>
          <div
            className="row row-cols-2 row-cols-md-3 mx-auto justify-content-center"
            style={{ maxWidth: 900 }}
          >
            <div className="col mb-4">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/dean.jpeg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Dr. Praveen Chandra</strong>
                </h5>
                <p className="text-muted mb-2">Chairperson</p>
              </div>
            </div>
            <div className="col mb-4">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/shiv_ram_meena.jpeg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Dr. Shiv Ram Meena</strong>
                </h5>
                <p className="text-muted mb-2">Chief Faculty Advisor</p>
              </div>
            </div>
            <div className="col mb-4">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/chakresh.jpeg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Dr. Chakresh Kumar</strong>
                </h5>
                <p className="text-muted mb-2">Faculty Advisor</p>
              </div>
            </div>
          </div>
          <div
            className="row row-cols-2 row-cols-md-4 mx-auto"
            style={{ maxWidth: 900, marginTop: "1.5vh" }}
          >
            <div
              className="col-md-8 col-xl-6 text-center mx-auto my-2"
              style={{ width: "100%" }}
            >
              {/* <p className="fw-bold text-success mb-2">Our Leads</p> */}
              <h2 className="fw-bold my-4">Student Leads</h2>
              {/* <p className="text-muted w-lg-50">No matter the project, our team can handle it.&nbsp;</p> */}
            </div>
            <div className="col mb-3">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/Jatin.jpg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Jatin Singh</strong>
                </h5>
                <p className="text-muted mb-2">President</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/Khushi.jpg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Khushi</strong>
                </h5>
                <p className="text-muted mb-2">Spokesperson</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/Louis.jpg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Louis</strong>
                </h5>
                <p className="text-muted mb-2">Convener</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/Aakash.jpg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Aakash Shrivastava</strong>
                </h5>
                <p className="text-muted mb-2">Treasurer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-4">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              {/* <p className="fw-bold text-success mb-2">Contacts</p> */}
              <h2 className="fw-bold">How you can reach us</h2>
            </div>
          </div>
          <div
            className="col-md-4 col-xl-4 d-flex justify-content-center"
            style={{
              margin: "auto",
              display: "flex",
              flexDirection: "row",
              width: "100%"
            }}
          >
            <div className="d-flex flex-wrap justify-content-md-start align-items-md-start">
              <div className="contact d-flex align-items-center p-3 mx-auto col-md-4">

                <div
                  className="bs-icon-md bs-icon-circle shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md"
                  style={{ backgroundColor: "#6e5494" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    fill='whitesmoke'
                    height="1em"
                    viewBox="0 0 16 16"
                    className="bi bi-telephone"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                  </svg>
                </div>
                <div className="px-2 ">
                  <h6 className="fw-bold mb-0">Phone</h6>
                  <p className="text-muted mb-0">99XX XXXXX</p>
                </div>
              </div>
              
              <div className="contact d-flex align-items-center p-3 mx-auto col-md-4">
                <a href="mailto:techspace@ipu.ac.in">
                  <div
                    className=" bs-icon-md bs-icon-circle shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md"
                    style={{ backgroundColor: "#6e5494" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      fill='whitesmoke'
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-envelope"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <div className="px-2">
                  <h6 className="fw-bold mb-0">Email</h6>
                  <p className="text-muted mb-0">techspace@ipu.ac.in</p>
                </div>
              </div>

              <div className="contact d-flex align-items-center p-3 mx-auto col-md-4">
                <a  href='https://www.google.com/maps/place/Guru+Gobind+Singh+Indraprastha+University/@28.5949739,77.0171102,17z/data=!3m1!4b1!4m5!3m4!1s0x390d1aafdb891567:0x10d270731c930a87!8m2!3d28.5949739!4d77.0192989' target={"_blank"}>
                <div
                  className="bs-icon-md bs-icon-circle shadow d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon bs-icon-md"
                  style={{ backgroundColor: "#6e5494" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill='whitesmoke'
                    viewBox="0 0 16 16"
                    className="bi bi-pin"
                  >
                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001zm-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282z"></path>
                  </svg>
                </div>
                </a>
                <div className="px-2">
                  <h6 className="fw-bold mb-0">Location</h6>
                  <p className="text-muted mb-0">
                    USICT, GGSIPU Dwarka Sec 16-C, New Delhi - 110078
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home