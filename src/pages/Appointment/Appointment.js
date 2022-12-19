import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Container } from "reactstrap"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { useMemo, useState } from "react"
import AlertDialog from "./Dialog/Dialog"
import api from "services/Api"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//i18n
import { withTranslation } from "react-i18next"

//redux

const initialValue = {
  //reset the form to initial value
  name: "",
  age: "",
  gender: "",
  contact: "",
  bloodgroup: "",
  Appointmentno: "",
  Appointmentdate: "",
  priority: "",
}

const Appointment = props => {
  const [tableData, setTableData] = useState(null)

  const [formData, setFormData] = useState(initialValue)

  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    //dialog open
    setOpen(true)
  }

  const handleClose = () => {
    //dialog close
    setOpen(false)
  }

  const onChange = e => {
    //catch the parameters when changed.
    const { value, id } = e.target
    setFormData({ ...formData, [id]: value })
  }
  
  const columnDefs = [
    { headerName: "Name", field: "name" , filter: 'agSetColumnFilter'},
    { headerName: "Age", field: "age" },
    { headerName: "Gender", field: "gender" },
    { headerName: "Contact", field: "contact" },
    { headerName: "Blood group", field: "bloodgroup" },
    { headerName: "Appt. No.", field: "Appointmentno" },
    { headerName: "Appt. Date", field: "Appointmentdate" },
    { headerName: "Priority", field: "priority" },
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  useEffect(() => {
    // getUsers from json
    getUsers()
  }, [])

  const getUsers = () => {
    api.getUser().then(res => setTableData(res.data))
    api.http
  }

  function handleFormSubmit() {
    //for posting and getting data at a sametime
    api.postUser(formData).then(resp => {
      console.log(resp)
    })
    handleClose()

    api
      .getUser({ headers: { "content-type": "application/json" } })
      .then(resp => {
        getUsers()
        setFormData(initialValue)
        preventDefault()
      })
  }

  
  

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs
            title={props.t("Appointment")}
            breadcrumbItem={props.t("Appointment")}
          />
          <button className="btn btn-primary bg-soft" onClick={handleClickOpen}>
            Add Patient
          </button>
          {/* <button className="btn btn-primary bg-soft" style={{marginLeft: "10px"}}>   //button for handleDisplay function
            Refresh
          </button> */}
        </Container>

        <div
          className="ag-theme-alpine"
          style={{ height: 500, marginTop: "20px" }}
        >
          <AgGridReact
            rowData={tableData}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
          />
          <AlertDialog
            open={open}
            handleClose={handleClose}
            data={formData}
            onChange={onChange}
            handleFormSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  )
}


export default withTranslation()(Appointment)
