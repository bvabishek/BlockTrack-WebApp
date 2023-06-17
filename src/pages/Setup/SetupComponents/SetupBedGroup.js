import PropTypes from "prop-types"
import React ,{useMemo, useState} from "react"
import { Container, Card, CardBody } from "reactstrap"

//i18n
import { withTranslation } from "react-i18next"
import { AgGridReact, AgGridColumn } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import SetupBedGroupDialog from "../SetupDialog/SetupBedGroupDialog"
//redux

const SetupBedGroup = props => {
  
  const [openSetupBedgroupDialog, setOpenSetupBedgroupDialog] = useState()

  const rowData = [
    {name: 'VIP Ward', floor: 'Ground Floor', description: 'The operating room (OR) is where both inpatient and outpatient surgeries are performed.', action: ''}
  ]

  const columnDefs = [
    {headerName: 'Name', field: 'name'},
    {headerName: 'Floor', field: 'floor'},
    {headerName: 'Description', field: 'description'},
    {headerName: 'Action', field: 'action'}
  ]

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
      flex: 1,
    }),
    []
  )

  const handleOpenBedGroup = () => {
    setOpenSetupBedgroupDialog(true);
  }

  const handleCloseBedGroup = () => {
    setOpenSetupBedgroupDialog(false);
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <h4>Bed Group List</h4>
          <Card>
            <CardBody>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary bg-soft" onClick={handleOpenBedGroup}><i className="fa fa-plus"></i>&nbsp; Add Bed Group</button>
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
                </div>
                <SetupBedGroupDialog open={openSetupBedgroupDialog} handleClose={handleCloseBedGroup}/>
            </CardBody>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default withTranslation()(SetupBedGroup)
