import PropTypes from "prop-types"
import React, { useMemo, useState, useEffect } from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import SetupPathologyUnitDialog from "../SetupDialog/SetupPathologyUnitDialog"
import api from "services/Api"

const setupPathologyUnitType = props => {
  const [openpathUnitDialog, setOpenPathUnitDialog] = useState();

  const rowData = [
    {unit: 'Micrometer'}
  ]

  const columnDefs = [
    { headerName: "Unit Name", field: "unit" },
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )


  const handleOpenPathUnitType = () => {
    setOpenPathUnitDialog(true);
  }

  const handleClosePathUnitType = () => {
    setOpenPathUnitDialog(false);
  }


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Unit Type List</h4>
          <Card>
            <CardBody>
              <div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn btn-primary bg-soft" onClick={handleOpenPathUnitType}>
                    <i className="fa fa-plus"></i>&nbsp; Add Unit Type
                  </button>
                </div>
                <div
                  className="ag-theme-alpine"
                  style={{height: 500, marginTop: "20px" }}
                >
                  <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultColDef}
                  />
                  <SetupPathologyUnitDialog open={openpathUnitDialog} handleClose={handleClosePathUnitType} />
                </div>
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(setupPathologyUnitType)
