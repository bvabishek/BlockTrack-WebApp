import PropTypes from "prop-types"
import React, { useMemo, useState, useEffect } from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import SetupSymptomsTypeDialog from "../SetupDialog/SetupSymptomsTypeDialog"
import api from "services/Api"


const SetupSymptomsType = props => {

    const [open, setOpen] = useState('');

  const rowData = [
    {type: 'Headache'}
  ]

  const columnDefs = [
    { 
      headerName: "Symptoms Type", 
      field: "type", 
    },
    {headerName: "Action", field: 'action'}
  ];
  
  
  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  const handleOpenDialog = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Symptoms Type List</h4>
          <Card>
            <CardBody>
              <div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn btn-primary bg-soft" onClick={handleOpenDialog}>
                    <i className="fa fa-plus"></i>&nbsp; Add Symptoms Type
                  </button>
                </div>
                <SetupSymptomsTypeDialog open={open} handleClose={handleClose}/>
                <div
                  className="ag-theme-alpine"
                  style={{height: 500, marginTop: "20px" }}
                >
                  <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(SetupSymptomsType)
