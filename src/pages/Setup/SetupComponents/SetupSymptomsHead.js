import PropTypes from "prop-types"
import React, { useMemo, useState, useEffect } from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import SetupSymptomsDialog from "../SetupDialog/SetupSymptomsDialog"
import api from "services/Api"


const SetupSymptomsHead = props => {
    const [open, setOpen] = useState('')

  const rowData = [
    {shead: 'Thirst', type: 'Eat problem',desc: 'nothing'}
  ]

  const columnDefs = [
    { headerName: "Symptoms Head", field: "shead" },
    { 
      headerName: "Symptoms Type", 
      field: "type", 
    },
    {headerName: "Symptoms Description", field: 'desc'},
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

  const handleCloseDialog = () => {
    setOpen(false);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Symptoms Head List</h4>
          <Card>
            <CardBody>
              <div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn btn-primary bg-soft" onClick={handleOpenDialog}>
                    <i className="fa fa-plus"></i>&nbsp; Add Symptoms Head
                  </button>
                </div>
                <SetupSymptomsDialog open={open} handleClose={handleCloseDialog}/>
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

export default withTranslation()(SetupSymptomsHead)
