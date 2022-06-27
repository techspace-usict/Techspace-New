import React from 'react'
import { Link } from 'react-router-dom'
import './CSS/Hero.css'



const Home = () => {
  return (
    <>
      <header className="py-5 mb-5 mt-5">
        <div className="container" id="header">
          <div className="row">
            <div className="col-md-6 text-center text-md-start d-flex d-sm-flex d-flex justify-content-center align-items-center mb-4">
              <div style={{ maxWidth: 450 }}>
                <h2 className="fw-bold">Best place to nurture yourself</h2>
                <p className="my-3">
                  <b>LET'S JOIN HANDS</b>
                </p>
                <div className="my-2">
                  <button
                    className="btn btn-info shadow"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4 myconatiner">
              <div className="p-5 mx-lg-5">
                <img className="rounded shadow fit-cover heroImage" src={require("./Images/main_page.jpg")} alt='' />
              </div>

            </div>
          </div>
        </div>
      </header>
      <section className="pb-5">
        <div className="container text-center py-5">
          <p className="mb-4" style={{ fontSize: "1.6rem" }}>
            Having{" "}
            <span className="p-1">
              <strong>7</strong>
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
          <Link to="/">
            <img
              className="m-3 clubImg"
              src={require("./Images/gdsc.png")}
              alt=''
            />
          </Link>
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
                        This Club is for Futurists and kind off tough but
                        Interesting and learning the new stuff before they came to
                        the market.
                      </h5>
                      <button className="btn btn-info btn-sm" type="button">
                        Learn more
                      </button>
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
                        Codeschool welcomes you to the world of competitive
                        programming and grow with us.
                      </h5>
                      <button className="btn btn-info btn-sm" type="button">
                        Learn more
                      </button>
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
                        Cogitans are the Web DEv Commuinty which provides the exact
                        information and the current trends in this world.
                      </h5>
                      <button className="btn btn-info btn-sm" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div
                    className="card card-2"
                    style={{ backgroundColor: "rgba(188, 237, 188, 0.2)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-info card-text mb-2">Droid Club</p>
                      <h5 className="fw-bold card-title mb-3">
                        This Club is For Android Geeks and who are keen to make
                        their own Apps and making money by placing it on playstore.
                      </h5>
                      <button className="btn btn-info btn-sm" type="button">
                        Learn more
                      </button>
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
                        Cogitans are the Web DEv Commuinty which provides the exact
                        information and the current trends in this world.
                      </h5>
                      <button className="btn btn-info btn-sm" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div
                    className="card card-2"
                    style={{ backgroundColor: "rgba(255, 131, 255, 0.207)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-info card-text mb-2">
                        Open Source Learning Club
                      </p>
                      <h5 className="fw-bold card-title mb-3">
                        This is one of the Best Club which helps you to introduce
                        the real world of coding.
                      </h5>
                      <button className="btn btn-info btn-sm" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
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
                        Cogitans are the Web DEv Commuinty which provides the exact
                        information and the current trends in this world.
                      </h5>
                      <button className="btn btn-info btn-sm" type="button">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col mb-4">
                  <div
                    className="card card-2"
                    style={{ backgroundColor: "rgba(106, 142, 35, 0.201)" }}
                  >
                    <div className="card-body text-center px-4 py-5 px-md-5">
                      <p className="fw-bold text-info card-text mb-2">
                        Unity Game Dev
                      </p>
                      <h5 className="fw-bold card-title mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                        sequi quis a ullam harum voluptatem .
                      </h5>
                      <button className="btn btn-info btn-sm" type="button">
                        Learn more
                      </button>
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
            className="row row-cols-2 row-cols-md-3 mx-auto"
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
                  <strong>Mr. Praveen Chandra</strong>
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
                  <strong>Mr. Shiv Ram Meena</strong>
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
                  <strong>Mr. Chakresh Kumar</strong>
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
              <h2 className="fw-bold">Student Leads</h2>
              {/* <p className="text-muted w-lg-50">No matter the project, our team can handle it.&nbsp;</p> */}
            </div>
            <div className="col mb-3">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/vivek.jpeg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Vivek Bhatia</strong>
                </h5>
                <p className="text-muted mb-2">President</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/prince.jpeg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Prince Kr. Gupta</strong>
                </h5>
                <p className="text-muted mb-2">Spokesperson</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  src={require("./Images/ridhi.jpg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Ridhi</strong>
                </h5>
                <p className="text-muted mb-2">Convener</p>
              </div>
            </div>
            <div className="col mb-3">
              <div className="text-center">
                <img
                  className="rounded card-2 mb-3 fit-cover"
                  // src={require("./Images/kartik.jpg")}
                  width={150}
                  height={150}
                  alt=''
                />
                <h5 className="fw-bold mb-0">
                  <strong>Kartik</strong>
                </h5>
                <p className="text-muted mb-2">Treasurer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}

export default Home