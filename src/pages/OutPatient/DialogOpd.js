import * as React from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Container } from "reactstrap"
import { TextField } from "@material-ui/core"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import OpdPatientDialog from "./OpdDialog/OpdPatientDialog"
import { useEffect } from "react"
import api from "services/Api"
import { useState } from "react"
import { options } from "toastr"


export default function OpdDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
  setFetchData,
  patientId
}) {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [listPatient, setListPatient] = useState([])
  const [consdoctor,setConsdoctor] = useState('')

  useEffect(() => {
    getAllPatients()
    handleConsultant()
  }, [])
  const getAllPatients = async () => {
    const response = await api.getPatient()
    const { data } = response
    console.log(data, "kkkkkkkkkkkkkkkkkkk")
    setListPatient(data)


  }

  const handleConsultant = async () =>{
    const response = await  api.getConsultant()
    const {data} = response
    setConsdoctor(data)
    console.log(data,"data")
  }

  const handleClickOpen = () => {
    //dialog open
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    //dialog close
    setOpenDialog(false)
  }

  

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      }}
    >
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
      >
        <DialogTitle id="alert-dialog-title">
          <Container className="bg-primary bg-soft p-3" fluid>
            {/* <input
              placeholder="Search"
              style={{ height: "35px", fontSize: "18px" }}
            ></input> */}
            {/* <select
              style={{ width: "20%", height: "30px" }}
              name="patient_id"
              value={data.patient_id}
              onChange={e => onChange(e)}
            >
              {listPatient &&
                listPatient.map((value) => (
                  <option key={value.patient_id} value={value.patient_id}>
                    {value.patient_name}
                  </option>
                ))}
            </select> */}
            {console.log(data)}
            <select
              style={{ width: "20%", height: "30px" }}
              id="patient_id"
              value={data.patient_id}
              onChange={e=>onChange(e)}
            >
              {listPatient &&
                listPatient.map((patient) => (
                  <option key={patient.id} value={patient.id}>
                    {patient.patient_name}
                  </option>
                ))}
            </select>
                {console.log(listPatient,'list patient')}
            <button
              className="btn btn-primary bg-soft ms-3"
              onClick={handleClickOpen}
            >
              + New Patient
            </button>
            <OpdPatientDialog setFetchData={setFetchData} open={openDialog} handleClose={handleDialogClose} />
          </Container>
        </DialogTitle>
        <DialogContent className="mt-4 ms-2">
          <Row>
            <Col lg="8">
              <Row>
              {/* <Col>
                <label>created At</label>
                <br />
                <input value={data.created_at} id="created_at" onChange={e=>onChange(e)}>
                  
                </input>
              </Col>
              <Col>
                <label>generated by</label>
                <br />
                <input value={data.generated_by} id="generated_by" onChange={e=>onChange(e)}>
                  
                </input>
              </Col> */}
              {/* <Col>
                <label>Patient ID</label>
                <br />
                <input value={data.patient_id} id="patient_id" onChange={e=>onChange(e)}>
                  
                </input>
              </Col> */}
              {/* <Col>
                <label>Discharged</label>
                <br />
                <input value={data.discharged} id="discharged" onChange={e=>onChange(e)}>
                  
                </input>
              </Col>
              <Col>
                <label>is_ipd_moved</label>
                <br />
                <input value={data.is_ipd_moved} id="is_ipd_moved" onChange={e=>onChange(e)}>
                  
                </input>
              </Col> */}
              <Col lg='4' md='4' sm='12'>
                <label>case Reference id</label>
                <br />
                <input value={data.case_reference_id} id="case_reference_id" onChange={e=>onChange(e)} type="number" style={{ height: "30px", width: '100%'}}>
                  
                </input>
              </Col>
                <Col lg='4' md='4' sm='12'>
                  <label>Height</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ height: "30px", width: '100%'}}
                  ></input>
                </Col>
                <Col lg='4' md='4' sm='12'>
                  <label>Weight</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ height: "30px", width: '100%' }}
                  ></input>
                </Col>
                <Col lg='4' md='4' sm='12'>
                  <label>BP</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ height: "30px", width: '100%'}}
                  ></input>
                </Col>
               
              </Row>
              <br />
              <Row>
              <Col lg='4' md='4' sm='12'>
                  <label>Pulse</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ height: "30px", width: '100%' }}
                  ></input>
                </Col>
                <Col lg='4' md='4' sm='12'>
                  <label>Temperature</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ height: "30px", width: '100%' }}
                  ></input>
                </Col>
                <Col lg='4' md='4' sm='12'> 
                  <label>Respiration</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ height: "30px", width: '100%'}}
                  ></input>
                </Col>
              </Row>
              <br />
              <Row>
                <Col >
                  <Row>
                    <Col lg="4" md="4" sm="12">
                      <label>Symptoms Type</label>
                      <br />
                      <input
                        type="text"
                        placeholder=""
                        style={{ width: "100%", height: "30px" }}
                      ></input>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                      <label>Symptoms Title</label>
                      <br />
                      <input
                        type="text"
                        placeholder=""
                        style={{ width: "100%", height: "30px" }}
                      ></input>
                    </Col>
                    <Col lg="4" md="4" sm="12">
                      <label>Symptoms Description</label>
                      <br />
                      <input
                        type="text"
                        placeholder=""
                        style={{ width: "100%", height: "30px" }}
                      ></input>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <br />
              <Row>
                <Col lg="6" md="6" sm="12">
                  <label>Note</label>
                  <br />
                  <textarea
                    maxLength="infinity"
                    style={{ width: "100%" }}
                  ></textarea>
                </Col>
                <Col lg="6" md="6" sm="12">
                  <label>Any Known Allergies</label>
                  <br />
                  <textarea
                    maxLength="infinity"
                    style={{ width: "100%" }}
                  ></textarea>
                </Col>
              </Row>
            </Col>
            <Col lg="4">
              <div
                className="card p-4"
                style={{ backgroundColor: "rgba(0,0,0,0.1)" }}
              >
                <Row>
                  <Col lg="12">
                    <label>Appointment Date</label>
                    <br />
                    <input placeholder="Ex: 2023-01-01 11:11:11" style={{ width: "100%" }} id="appointment_date" value={data.appointment_date} onChange={e=>onChange(e)} ></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Case</label>
                    <br />
                    <input placeholder="" style={{ width: "100%" }}></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Casualty</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }}>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </Col>
                  <Col>
                    <label>Old Patient</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }}>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>TPA</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }}>
                      <option>select</option>
                    </select>
                  </Col>
                  <Col>
                    <label>Reference</label>
                    <br />
                    <input
                      placeholder=""
                      style={{ width: "100%", height: "30px" }}
                    ></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Consultant Doctor</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }} id='cons_doctor' onChange={e=>onChange(e)} value={data.cons_doctor} >
                    <option>select one</option>
                    {consdoctor && consdoctor.map((doctor) => (
                    <option key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </option>
                  ))}
                    </select>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Charge Category</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }}>
                      <option>Select</option>
                    </select>
                  </Col>
                  <Col>
                    <label>Charge</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }}>
                      <option>Select</option>
                    </select>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Tax</label>
                    <br />
                    <input placeholder="%" style={{ width: '100%', height: '30px' }}></input>
                  </Col>
                  <Col>
                    <label>Standard Charge(₹)</label>
                    <br />
                    <input placeholder="" style={{ width: '100%', height: '30px' }}></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Applied Charge(₹)</label>
                    <br />
                    <input placeholder="" style={{ width: '100%', height: '30px' }}></input>
                  </Col>
                  <Col>
                    <label>Amount(₹)</label>
                    <br />
                    <input placeholder="" style={{ width: '100%', height: '30px' }}></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Payment Mode</label>
                    <br />
                    <select style={{ width: '100%', height: '30px' }}>
                      <option>Cash</option>
                      <option>UPI</option>
                      <option>Cheque</option>
                      <option>Bank Transfer</option>
                      <option>Online</option>
                    </select>
                  </Col>
                  <Col>
                    <label>Paid Amount(₹)</label>
                    <br />
                    <input placeholder="" style={{ width: '100%', height: '30px' }}></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Live Consultation</label>
                    <br />
                    <select style={{ width: '100%', height: '30px' }}>
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </DialogContent>
        <DialogActions>
          <button className="btn btn-primary bg-soft btn-md" onClick={() => handleFormSubmit()} style={{ marginRight: '3%' }}>
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}