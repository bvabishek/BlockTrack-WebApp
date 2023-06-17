import PropTypes from "prop-types"
import React ,{useMemo, useState} from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
//redux

const SetupBed = props => {

  const rowData = [
    {name: 'GS-101', type: 'Standard', group: 'VIP Ward', floor: 'Ground Floor', status: 'Available'}
  ]

  const columnDefs = [
    {headerName: 'Name', field: 'name'},
    {headerName: 'Bed Type', field: 'type'},
    {headerName: 'Bed Group', field: 'group'},
    {headerName: 'Floor', field: 'floor'},
    {headerName: 'Status', field: 'status'}
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Bed Status</h4>
          <Card>
            <CardBody>
              <div
                className="ag-theme-alpine"
                style={{ height: 500, marginTop: "20px" }}
              >
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                />
                              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(SetupBed)
