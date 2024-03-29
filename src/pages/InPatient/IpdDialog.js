import React,{useState, useEffect} from "react"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Row, Col, Container } from "reactstrap"
import { TextField } from "@material-ui/core"
import TextareaAutosize from "@mui/base/TextareaAutosize"
import IpdPatientDialog from "./IpdPatientProfile/IpdPatientDialog"
import api from "services/Api"

export default function IpdDialog({
  open,
  handleClose,
  data,
  onChange,
  handleFormSubmit,
  setFetchData,
  patientId,
  fetchData,
  handlePatientId
}) {
  const [openDialog, setOpenDialog] = React.useState(false)

  const [listPatient, setListPatient] = useState([])

  const [consdoctor,setConsdoctor] = useState('')
useEffect(()=>{
  handleConsultant()
  // handleBloodgroups()

},[])

const handleConsultant = async () =>{
  const response = await  api.getConsultant()
  const {data} = response
  setConsdoctor(data)
  console.log(data,"data")
}

  useEffect(() => {
    getAllPatients()
  }, [])

 
  const getAllPatients = async () => {
    console.log('hihhihihihihih')
    const response = await api.getPatient()
    const { data } = response
    console.log(data, "kkkkkkkkkkkkkkkkkkk")
    setListPatient(data)
}

  const handleClickOpen = () => {
    //dialog open
    setOpenDialog(true)
  }

  const handleDialogClose = () => {
    //dialog close
    setOpenDialog(false)
  }

  console.log(data,'data here')
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
            <button
              className="btn btn-primary bg-soft ms-3"
              onClick={handleClickOpen}
            >
              + New Patient
            </button>
            <IpdPatientDialog open={openDialog} handleClose={handleDialogClose} setFetchData={setFetchData} fetchData={fetchData}/>
          </Container>
        </DialogTitle>
        <DialogContent className="mt-4 ms-2">
          <Row>
            <Col lg="8">
              <Row>
              <Col>
                <label>Case Reference ID</label>
                <br />
                <input id="case_reference_id" value={data.case_reference_id} onChange={e=>onChange(e)} type="number"></input>
              </Col>
                <Col>
                  <label>Height</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ height: "30px", width: '100%' }}
                  ></input>
                </Col>
                <Col>
                  <label>Weight</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ height: "30px", width: '100%' }}
                  ></input>
                </Col>
                
                <Col>
                  <label>Pulse</label>
                  <br />
                  <input
                  id="pulse"
                    type="number"
                    placeholder=""
                    style={{ height: "30px",  width: '100%' }}
                    value={data.pulse} 
                    onChange={e=>onChange(e)}
                  ></input>
                </Col>
                
              </Row>
              <br />
              <Row>
              <Col>
                  <label>BP</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    style={{ width: "100%",height: "30px" }}
                  ></input>
                </Col>
                <Col>
                
                  <label>Temperature</label>
                  <br />
                  <input
                  id="temperature"
                    type="number"
                    placeholder=""
                    style={{ width: "100%",height: "30px" }}
                    value={data.temperature} 
                    onChange={e=>onChange(e)}
                  ></input>
                </Col>
                <Col>
                  <label>Respiration</label>
                  <br />
                  <input
                  id="respiration"
                    type="text"
                    placeholder=""
                    style={{ width: "100%",height: "30px" }}
                    value={data.respiration} 
                    onChange={e=>onChange(e)}
                  ></input>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Row>
                    <Col lg="4" md="4" sm="3">
                      <label>Symptoms Type</label>
                      <br />
                      <input
                      id="symptoms"
                        type="text"
                        placeholder=""
                        style={{ width: "100%", height: "30px" }}
                        value={data.symptoms} 
                    onChange={e=>onChange(e)}
                      ></input>
                    </Col>
                    <Col lg="4" md="4" sm="3">
                      <label>Symptoms Title</label>
                      <br />
                      <input
                        type="text"
                        placeholder=""
                        style={{ width: "100%", height: "30px" }}
                      ></input>
                    </Col>
                    <Col lg="4" md="4" sm="3">
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
                <Col lg="12" md="12" sm="2">
                  <label>Note</label>
                  <br />
                  <textarea
                  id="note"
                    maxLength="infinity"
                    style={{ width: "100%" }}
                    value={data.note}
                    onChange={e=>onChange(e)}
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
                    <label>Admission Date</label>
                    <br />
                    <input placeholder="Ex: 2023-01-01 00:00:00" style={{ width: "100%" }}></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Case</label>
                    <br />
                    <input placeholder="" style={{ width: "100%" }} id="case_type" value={data.case_type}
                    onChange={e=>onChange(e)}></input>
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
                    <label>Consultant</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }} id='cons_doctor' onChange={e=>onChange(e)} value={data.cons_doctor}>
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
                    <label>TPA</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }}>
                      <option>select</option>
                    </select>
                  </Col>
                  <Col>
                    <label>Credit Limit</label>
                    <br />
                    <input
                    id="credit_limit"
                      placeholder=""
                      style={{ width: "100%", height: "30px" }}
                      value={data.credit_limit}
                    onChange={e=>onChange(e)}
                    ></input>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Bed Group</label>
                    <br />
                    <select style={{ width: "100%" , height: "30px"}}>
                      <option>Select</option>
                    </select>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Bed Number</label>
                    <br />
                    <select style={{ width: "100%", height: "30px" }}>
                      <option>Select</option>
                    </select>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col>
                    <label>Live Consultation</label>
                    <br />
                    <select style={{ width: "100%" , height: "30px"}} id="live_consult" value={data.live_consult} onChange={e=>onChange(e)}>
                      <option value='no'>No</option>
                      <option value='yes'>Yes</option>
                    </select>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </DialogContent>
        <DialogActions>
          <button className="btn btn-primary bg-soft btn-md" onClick={()=>handleFormSubmit(handleClose())} style={{marginRight: '3%'}}>
            Save
          </button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
