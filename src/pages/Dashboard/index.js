import PropTypes from "prop-types"
import React from "react"
import { CardBody, Container } from "reactstrap"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"
import "./styles.css"
import Barchart from "pages/BarChart/Barchart"
import { useLocation } from "react-router-dom";
//redux

const Dashboard = props => {
  //meta title
  document.title = "Dashboard | BlockTrack"
  const location = useLocation();
  const userData = location.state && location.state.userData;
  console.log(userData, 'userrrrr')

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
         <h4>Dashboard</h4>
          <div className="row mt-4">
            <div className="overflow-hidden card">
              <div className="bg-primary bg-soft">
                <div className="row">
                  <div className="col-6">
                    <div className="text-primary p-3 mt-2">
                      <h5 className="text-primary">Welcome Back!</h5>
                      <p>BlockTrack Dashboard</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/opd">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">
                          Outpatient Income
                        </p>
                        <h5 className="mb-0">₹ 2200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-stethoscope fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/ipd">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">Inpatient Income</p>
                        <h5 className="mb-0">₹ 3200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-procedures fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/pharmacy">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">Pharmacy Income</p>
                        <h5 className="mb-0">₹ 5200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-mortar-pestle fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/pathology">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">Pathology Income</p>
                        <h5 className="mb-0">₹ 3200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-flask fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/radiology">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">Radiology Income</p>
                        <h5 className="mb-0">₹ 6200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-microscope fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/bloodbank">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">
                          Blood Bank Income
                        </p>
                        <h5 className="mb-0">₹ 1200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-tint fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/ambulance">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">Ambulance Income</p>
                        <h5 className="mb-0">₹ 7200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-ambulance fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/income">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">General Income</p>
                        <h5 className="mb-0">₹ 10200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-money-bill-wave fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="mini-stats-wid card">
                <div className="card-body">
                  <Link to="/expenses">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted fw-medium">Expenses</p>
                        <h5 className="mb-0">₹ 9200.00</h5>
                      </div>
                      <div className="avatar-sm rounded-circle bg-primary">
                        <span className="avatar-title rounded-circle bg-primary">
                          <i className="fas fa-rupee-sign fa-lg"></i>
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <br />

            <div>
              <h3 className="fs-5 text-dark">STAFFS</h3>
            </div>
            <br />

            <div className="card p-3">
              <div className="row">
                <div className="col">
                  <div className="row mt-2">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div
                        className="card"
                        style={{ border: "1px solid grey" }}
                      >
                        <div
                          className="info-box ms-3 mt-2 mb-2"
                          title="accountant"
                        >
                          <Link to="/hr">
                            <span className="info-box-icon bg-secondary p-2">
                              <i
                                className="far fa-file-alt fa-lg mt-2 p-1"
                                style={{ color: "white" }}
                              ></i>
                            </span>
                            <div className="info-box-content">
                              <br />
                              <span className="info-box-text text-secondary">
                                Accountant
                              </span>
                              <br />
                              <span
                                className="info-box-number text-secondary"
                                style={{ fontWeight: "bold" }}
                              >
                                2
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div
                        className="card"
                        style={{ border: "1px solid grey" }}
                      >
                        <div className="info-box ms-3 mt-3 mb-2" title="doctor">
                          <Link to="/hr">
                            <span className="info-user-md fa-lg bg-secondary p-2">
                              <i
                                className="fas fa-user-md fa-lg mt-2"
                                style={{ color: "white" }}
                              ></i>
                            </span>
                            <div className="info-box-content">
                              <br />
                              <span className="info-box-text text-secondary">
                                Doctor
                              </span>
                              <br />
                              <span
                                className="info-box-number text-secondary"
                                style={{ fontWeight: "bold" }}
                              >
                                5
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div
                        className="card"
                        style={{ border: "1px solid grey" }}
                      >
                        <div
                          className="info-box ms-3 mt-3 mb-2"
                          title="pharmacist"
                        >
                          <Link to="/hr">
                            <span className="info-box-icon bg-secondary p-2">
                              <i
                                className="fas fa-medkit fa-lg mt-2"
                                style={{ color: "white" }}
                              ></i>
                            </span>
                            <div className="info-box-content">
                              <br />
                              <span className="info-box-text text-secondary">
                                Pharmacist
                              </span>
                              <br />
                              <span
                                className="info-box-number text-secondary"
                                style={{ fontWeight: "bold" }}
                              >
                                3
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div
                        className="card"
                        style={{ border: "1px solid grey" }}
                      >
                        <div
                          className="info-box ms-3 mt-3 mb-2"
                          title="pathologist"
                        >
                          <Link to="/hr">
                            <span className="info-box-icon bg-secondary p-2">
                              <i
                                className="fas fa-dna fa-lg mt-2"
                                style={{ color: "white" }}
                              ></i>
                            </span>
                            <div className="info-box-content">
                              <br />
                              <span className="info-box-text text-secondary">
                                Pathologist
                              </span>
                              <br />
                              <span
                                className="info-box-number text-secondary"
                                style={{ fontWeight: "bold" }}
                              >
                                2
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div
                        className="card"
                        style={{ border: "1px solid grey" }}
                      >
                        <div
                          className="info-box ms-3 mt-3 mb-2"
                          title="radiologist"
                        >
                          <Link to="/hr">
                            <span className="info-box-icon bg-secondary p-2">
                              <i
                                className="fas fa-bong fa-lg mt-2"
                                style={{ color: "white" }}
                              ></i>
                            </span>
                            <div className="info-box-content">
                              <br />
                              <span className="info-box-text text-secondary">
                                Radiologist
                              </span>
                              <br />
                              <span
                                className="info-box-number text-secondary"
                                style={{ fontWeight: "bold" }}
                              >
                                1
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div
                        className="card"
                        style={{ border: "1px solid grey" }}
                      >
                        <div
                          className="info-box ms-3 mt-3 mb-2"
                          title="superadmin"
                        >
                          <Link to="/hr">
                            <span className="info-box-icon bg-secondary p-2">
                              <i
                                className="fas fa-user-cog fa-lg mt-2"
                                style={{ color: "white" }}
                              ></i>
                            </span>
                            <div className="info-box-content">
                              <br />
                              <span className="info-box-text text-secondary">
                                Super Admin
                              </span>
                              <br />
                              <span
                                className="info-box-number text-secondary"
                                style={{ fontWeight: "bold" }}
                              >
                                1
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div
                        className="card"
                        style={{ border: "1px solid grey" }}
                      >
                        <div
                          className="info-box ms-3 mt-3 mb-2"
                          title="receptionist"
                        >
                          <Link to="/hr">
                            <span className="info-box-icon bg-secondary p-2">
                              <i
                                className="fas fa-address-card fa-lg mt-2"
                                style={{ color: "white" }}
                              ></i>
                            </span>
                            <div className="info-box-content">
                              <br />
                              <span className="info-box-text text-secondary">
                                Receptionist
                              </span>
                              <br />
                              <span
                                className="info-box-number text-secondary"
                                style={{ fontWeight: "bold" }}
                              >
                                1
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-sm-6">
                      <div
                        className="card"
                        style={{ border: "1px solid grey" }}
                      >
                        <div className="info-box ms-3 mt-3 mb-2" title="nurse">
                          <Link to="/hr">
                            <span className="info-box-icon bg-secondary p-2">
                              <i
                                className="fas fa-syringe fa-lg mt-2"
                                style={{ color: "white" }}
                              ></i>
                            </span>
                            <div className="info-box-content">
                              <br />
                              <span className="info-box-text text-secondary">
                                Nurse
                              </span>
                              <br />
                              <span
                                className="info-box-number text-secondary"
                                style={{ fontWeight: "bold" }}
                              >
                                10
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>Social Media</h5>
                    </div>
                    <div className="mt-4 row p-2">
                      <div className="col-4 col">
                        <a href="https://mail.google.com/">
                          <div className="social-source text-center mt-3">
                            <div className="avatar-sm mx-auto mb-3">
                              <span className="avatar-title rounded-circle bg-danger font-size-16">
                                <i className="mdi mdi-gmail text-white"></i>
                              </span>
                            </div>
                            <h5 className="font-size-15">Gmail</h5>
                          </div>
                        </a>
                      </div>
                      <div className="col-4 col">
                        <a href="https://www.linkedin.com/">
                          <div className="social-source text-center mt-3">
                            <div className="avatar-sm mx-auto mb-3">
                              <span className="avatar-title rounded-circle bg-primary font-size-16">
                                <i className="mdi mdi-linkedin text-white"></i>
                              </span>
                            </div>
                            <h5 className="font-size-15">Linkedin</h5>
                          </div>
                        </a>
                      </div>
                      <div className="col-4 col" style={{height: '120px'}}>
                        <a href="https://www.whatsapp.com/">
                          <div className="social-source text-center mt-3">
                            <div className="avatar-sm mx-auto mb-3">
                              <span className="avatar-title rounded-circle bg-success font-size-16">
                                <i className="mdi mdi-whatsapp text-white"></i>
                              </span>
                            </div>

                            <h5 className="font-size-15">whatsapp</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card"  style={{height: '218px'}}>
                  <div className="card-body">
                    <div className="card-title">
                      <h5>Activity</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="card-title">
                      <h5>About</h5>

                      <p className="text-muted fw-normal fs-8 mt-2">
                        BlockTrack aims to securely digitise healthcare
                        information systems along with ensuring protection of
                        sensitive personal information and medical records by
                        decentralising the control and ownership of patient
                        data, through a blockchain-based innovation.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(Dashboard)
