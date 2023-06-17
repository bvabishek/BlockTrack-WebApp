import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Container } from "reactstrap"
import { TextField } from "@material-ui/core"
import PatientDialog from "pages/Appointment/Dialog/PatientDialog"
// import PatientPathologyDialog from "./Patientdialog"

export default function RadiologyBillDialog({
  open,
  handleClose,
}) {
  var [date, setDate] = useState(new Date())
  const [openDialog, setOpenDialog] = React.useState(false);
  const [formValue,setFormValue] = useState({
    prescriptionNo:''
  })
  const handleChange = (event) =>{
    const {name,value} = event.target
    setFormValue({
        ...formValue,[name]:value
    })
  }

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })
  

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="bg-primary bg-soft text-primary"
        >
          Bill No
          <div> <select
            style={{ width: "40%", height: "30px" }}
            className="ms-3"
          ></select>
          <input placeholder="search" onChange={handleChange} name="prescriptionNo" value={formValue.prescriptionNo} style={{ width: "40%", height: "30px" }} className="ms-5"></input>
          <button>go</button>
          </div>c  
          <div className="mt-3 d-flex justify-content-end">
            <button className="btn btn-primary" onClick={handleOpenDialog} style={{marginRight: '48px'}}><i className="fa fa-plus" ></i>&nbsp;Add Patient</button>
            <PatientDialog
              open={openDialog}
              handleClose={handleCloseDialog} />
          </div>
        </DialogTitle>
        <DialogContent className="mt-2">
          <br />


          <h4 className="mt-3">Bill No</h4>
          <p
            className="text-dark fw-bold fs-5"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            Purchase Date & Time&nbsp;
            {date.toLocaleTimeString()}
            {date.toLocaleDateString()}
          </p>
          <div className="card">
            <Row>
              <Col lg="12">
                <Row>
                  <Col lg="4" md="4">
                    <label>Test Name</label>
                    <br />
                    <select style={{ width: "90%", height: "25px" }} id="medicine_category">
                      <option>Select</option>
                    </select>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Report Days</label>
                    <br />
                    <input style={{ width: "90%", height: "25px" }} ></input>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Report Date</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}
                    ></input>
                  </Col>
                </Row>

                <br />

                <Row>

                  <Col lg="4" md="4">
                    <label>Tax</label>
                    <br />
                    <input
                      placeholder="%"
                      style={{ width: "90%", height: "25px" }}

                    ></input>
                  </Col>
                  <Col lg="4" md="4">
                    <label>Amount(₹)</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "90%", height: "25px" }}

                    ></input>
                  </Col>
                </Row>

                <br />
                <Row>
                  <Col lg="5">
                    <label>Note</label>
                    <br />
                    <textarea
                      maxLength="infinity"
                      style={{ width: "90%", height: "55px" }}
                    ></textarea>
                    <br />
                    <br />
                    <label>Referal Doctor</label>
                    <br />
                    <select style={{ width: '70%' }}>
                      <option>select</option>
                    </select>
                    <br />
                    <br />
                    <label>Doctor Name</label>
                    <br />
                    <input style={{ width: '70%' }}></input>

                  </Col>

                  <Col
                    style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
                    className="p-4"
                    lg="6"
                  >
                    <br />
                    <Row className="ms-2">
                      <Col lg="3">
                        <label>Total(₹)</label>
                      </Col>
                      <Col lg="7">
                        <input
                          className="ms-3"
                          style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            width: "100%",
                            textAlign: "end",
                          }}
                          placeholder="0"

                        ></input>
                      </Col>
                    </Row>
                    <br />
                    <Row className="ms-2">
                      <Col lg="3">
                        <label>Discount(₹)</label>
                      </Col>
                      <Col lg="7">
                        <input
                          className="ms-3"
                          style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            width: "100%",
                            textAlign: "end",
                          }}
                          placeholder="0"

                        ></input>
                      </Col>
                    </Row>
                    <br />
                    <Row className="ms-2">
                      <Col lg="3">
                        <label>Tax(₹)</label>
                      </Col>
                      <Col lg="7">
                        <input
                          className="ms-3"
                          style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            width: "100%",
                            textAlign: "end",
                          }}
                          placeholder="0"

                        ></input>
                      </Col>
                    </Row>
                    <br />
                    <Row className="ms-2">
                      <Col lg="3">
                        <label>Net Amount(₹)</label>
                      </Col>
                      <Col lg="7">
                        <input
                          className="ms-3"
                          style={{
                            border: "none",
                            borderBottom: "1px solid black",
                            width: "100%",
                            textAlign: "end",
                          }}
                          placeholder="0"

                        ></input>
                      </Col>
                    </Row>
                    <br />
                    <Row></Row>
                    <Row>
                      <Col>
                        <label>Payment Mode</label>
                        <br />
                        <select>
                          <option>Cash</option>
                          <option>UPI</option>
                          <option>Bank Transfer</option>
                          <option>Cheque</option>
                          <option>Online</option>
                        </select>
                      </Col>
                    </Row>
                    <br />
                    <Row>
                      <Col>
                        <label>Payment Amount(₹)</label>
                        <br />
                        <input style={{ width: "65%" }}></input>
                      </Col>
                    </Row>

                    <br />
                    <Row>
                      <Col>
                        <label>Payment Note</label>
                        <br />
                        <textarea
                          style={{ height: "35px", width: "83%" }}
                        ></textarea>
                      </Col>
                    </Row>
                    <div className="mt-4">
                      <button className="btn btn-primary bg-soft">
                        Calculate
                      </button>
                    </div>
                  </Col>
                </Row>
                <br />
                <Row></Row>
              </Col>
            </Row>
            <br />
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="btn btn-primary"
            onClick={() => handleFormSubmit(handleClose())}
            autoFocus
          >
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}