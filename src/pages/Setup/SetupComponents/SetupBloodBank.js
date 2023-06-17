import PropTypes from "prop-types"
import React ,{useMemo, useState} from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import SetupBloodBankDialog from "../SetupDialog/SetupBloodBankDialog"
//redux

const SetupBloodBank = props => {

  const [openBbDialog, setOpenBbDialog] = useState();

  const rowData = [
    {name: 'A +', type: 'blood group'}
  ]

  const columnDefs = [
    {headerName: 'Name', field: 'name'},
    {headerName: 'Type', field: 'type'},
    {headerName: 'Action', field: 'action '}
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  const handleOpenBb = () => {
    setOpenBbDialog(true)
  }

  const handleCloseBb = () => {
    setOpenBbDialog(false)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Products List</h4>
          <Card>
            <CardBody>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-primary bg-soft" onClick={handleOpenBb}>
                  <i className="fa fa-plus"></i>&nbsp; Add Products
                </button>
              </div>
              <div
                className="ag-theme-alpine"
                style={{ height: 500, marginTop: "20px" }}
              >
                <AgGridReact
                  rowData={rowData}
                  columnDefs={columnDefs}
                  defaultColDef={defaultColDef}
                />
                <SetupBloodBankDialog open={openBbDialog} handleClose={handleCloseBb} />
              </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(SetupBloodBank)
