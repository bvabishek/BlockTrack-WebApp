import PropTypes from "prop-types"
import React ,{useMemo, useState} from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
//redux
import SetupBedTypeDialog from "../SetupDialog/SetupBedTypeDialog"

const SetupBedType = props => {
    const [openSetupBedtypeDialog, setOpenSetupBedtypeDialog] = useState()

  const rowData = [
  {purpose: 'Standard', action: ''}
  ]

  const columnDefs = [
    { headerName: "Purpose", field: "purpose" },
    {headerName: "Action", field: "action"}
  ];
  
  

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  const handleOpenBedtypeDialog = () => {
    setOpenSetupBedtypeDialog(true);
  }

  const handleCloseBedtypeDialog = () => {
    setOpenSetupBedtypeDialog(false);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Bed Type List</h4>
          <Card>
            <CardBody>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button className="btn btn-primary bg-soft" onClick={handleOpenBedtypeDialog}><i className="fa fa-plus"></i>&nbsp; Add Bed Type</button>
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
                <SetupBedTypeDialog open={openSetupBedtypeDialog} handleClose={handleCloseBedtypeDialog}/>
                </div>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(SetupBedType)
